import * as THREE from "three";

/**
 * Rich Three.js wireframe scene for the hero.
 * Emerald theme · multi-layer geometry · mouse parallax.
 * Skips on mobile and prefers-reduced-motion.
 */
export function initHeroScene(container) {
  if (!container) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  if (window.matchMedia("(max-width: 900px)").matches) return () => {};

  function cssColor(varName, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    if (!v) return fallback;
    return parseInt(v.replace("#", ""), 16);
  }

  const C = {
    deep: cssColor("--emerald-700", 0x047857),
    main: cssColor("--emerald-600", 0x059669),
    mid: cssColor("--emerald-500", 0x10b981),
    lit: cssColor("--emerald-400", 0x34d399),
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 4.6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  function wire(geo, color, opacity, scale) {
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      })
    );
    if (scale) mesh.scale.setScalar(scale);
    group.add(mesh);
    return mesh;
  }

  function solidRing(radius, tube, color, opacity) {
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 8, 96),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
    );
    group.add(mesh);
    return mesh;
  }

  const shell = wire(new THREE.IcosahedronGeometry(1.22, 2), C.deep, 0.2);
  wire(new THREE.IcosahedronGeometry(1.05, 1), C.main, 0.3);
  const inner = wire(new THREE.OctahedronGeometry(0.58, 0), C.lit, 0.45);
  const core = wire(new THREE.TetrahedronGeometry(0.28, 0), C.mid, 0.55);

  const ring1 = solidRing(1.62, 0.014, C.main, 0.24);
  ring1.rotation.x = Math.PI / 2.3;
  const ring2 = solidRing(1.38, 0.01, C.lit, 0.16);
  ring2.rotation.x = Math.PI / 3.1;
  ring2.rotation.y = Math.PI / 5;
  const ring3 = solidRing(1.85, 0.008, C.deep, 0.12);
  ring3.rotation.x = Math.PI / 1.8;
  ring3.rotation.z = Math.PI / 4;

  const knot = wire(new THREE.TorusKnotGeometry(0.42, 0.06, 80, 12, 2, 3), C.lit, 0.32);
  knot.rotation.x = Math.PI / 4;

  const orbiters = new THREE.Group();
  group.add(orbiters);
  const orbMeshes = [];
  for (let o = 0; o < 6; o++) {
    const cube = wire(new THREE.BoxGeometry(0.12, 0.12, 0.12), C.lit, 0.5);
    cube.userData.orbit = {
      radius: 1.45 + (o % 3) * 0.18,
      speed: 0.35 + o * 0.08,
      phase: o * 1.1,
    };
    orbiters.add(cube);
    orbMeshes.push(cube);
  }

  const particleCount = 220;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 1.6 + Math.random() * 1.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const particles = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({
      color: C.lit,
      size: 0.022,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    })
  );
  particles.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(particles);

  const linePositions = [];
  const lineGeo = new THREE.BufferGeometry();
  const lineMat = new THREE.LineBasicMaterial({
    color: C.main,
    transparent: true,
    opacity: 0.08,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lines);

  function rebuildLines() {
    linePositions.length = 0;
    const pts = particles.geometry.attributes.position.array;
    const step = 3;
    for (let a = 0; a < particleCount; a += step) {
      for (let b = a + step; b < particleCount; b += step) {
        const dx = pts[a * 3] - pts[b * 3];
        const dy = pts[a * 3 + 1] - pts[b * 3 + 1];
        const dz = pts[a * 3 + 2] - pts[b * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < 0.42) {
          linePositions.push(pts[a * 3], pts[a * 3 + 1], pts[a * 3 + 2]);
          linePositions.push(pts[b * 3], pts[b * 3 + 1], pts[b * 3 + 2]);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  }
  rebuildLines();

  const mouse = { x: 0, y: 0 };
  function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.28;
  }
  window.addEventListener("mousemove", onMouseMove, { passive: true });

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  resize();
  window.addEventListener("resize", resize);

  let t = 0;
  let rafId = 0;
  function animate() {
    t += 0.0055;
    const breathe = 1 + Math.sin(t * 1.4) * 0.025;

    group.rotation.y = t * 0.5 + mouse.x;
    group.rotation.x = t * 0.18 + mouse.y;
    group.scale.setScalar(breathe);

    shell.rotation.y = -t * 0.12;
    shell.rotation.x = t * 0.08;
    inner.rotation.y = -t * 0.95;
    inner.rotation.z = t * 0.42;
    core.rotation.x = t * 1.2;
    core.rotation.y = t * 0.8;
    knot.rotation.y = t * 0.65;
    knot.rotation.z = t * 0.3;

    ring1.rotation.z = t * 0.14;
    ring2.rotation.z = -t * 0.2;
    ring3.rotation.y = t * 0.1;

    particles.rotation.y = t * 0.06;
    lines.rotation.y = t * 0.06;

    orbMeshes.forEach((cube) => {
      const od = cube.userData.orbit;
      const ang = t * od.speed + od.phase;
      cube.position.set(
        Math.cos(ang) * od.radius,
        Math.sin(ang * 1.3) * 0.35,
        Math.sin(ang) * od.radius
      );
      cube.rotation.x = ang;
      cube.rotation.y = ang * 1.4;
    });

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }
  rafId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", resize);
    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };
}
