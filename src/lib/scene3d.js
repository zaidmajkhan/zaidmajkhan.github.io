import * as THREE from "three";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function makeRenderer(container) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  return renderer;
}

function wire(group, geo, color, opacity) {
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity }),
  );
  group.add(mesh);
  return mesh;
}

function solid(group, geo, color, opacity) {
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
  );
  group.add(mesh);
  return mesh;
}

function makeParticles(group, count, color, radius = 2.4, size = 0.018) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.45 + Math.random() * 0.7);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.55, depthAttenuation: true }),
  );
  points.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(points);
  return points;
}

/**
 * Dense hero scene: nested solids, multi-axis rings, satellites, particle field.
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (window.matchMedia("(max-width: 900px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0.15, 0.1, 4.6);

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  scene.add(root);

  const lime = 0xc8e86a;
  const mid = 0x34d399;
  const dim = 0x1a5c2e;
  const soft = 0x0a3318;

  const shell = wire(root, new THREE.IcosahedronGeometry(1.35, 1), dim, 0.32);
  const shell2 = wire(root, new THREE.DodecahedronGeometry(1.05, 0), soft, 0.2);
  const core = wire(root, new THREE.OctahedronGeometry(0.48, 0), lime, 0.7);
  const nucleus = solid(root, new THREE.IcosahedronGeometry(0.18, 0), lime, 0.35);

  const rings = [];
  [
    [1.75, 0.012, Math.PI / 2.2, 0],
    [1.95, 0.008, Math.PI / 3.1, Math.PI / 5],
    [2.15, 0.006, -Math.PI / 4.2, Math.PI / 3],
  ].forEach(([r, tube, rx, ry], i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, tube, 10, 120),
      new THREE.MeshBasicMaterial({
        color: i === 0 ? lime : mid,
        transparent: true,
        opacity: 0.28 - i * 0.05,
      }),
    );
    ring.rotation.x = rx;
    ring.rotation.y = ry;
    root.add(ring);
    rings.push(ring);
  });

  const satellites = [];
  for (let i = 0; i < 6; i++) {
    const sat = wire(
      root,
      new THREE.TetrahedronGeometry(0.12 + (i % 3) * 0.04, 0),
      i % 2 ? lime : mid,
      0.55,
    );
    satellites.push({
      mesh: sat,
      radius: 1.55 + (i % 3) * 0.35,
      speed: 0.35 + i * 0.08,
      phase: (i / 6) * Math.PI * 2,
      tilt: 0.35 + (i % 4) * 0.2,
    });
  }

  const particles = makeParticles(root, 220, lime, 2.8, 0.016);
  const dust = makeParticles(root, 80, mid, 3.2, 0.01);

  const mouse = { x: 0, y: 0 };
  const onMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.45;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
  };
  window.addEventListener("mousemove", onMove, { passive: true });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  resize();
  window.addEventListener("resize", resize);

  let t = 0;
  let raf = 0;
  const animate = () => {
    t += 0.0075;
    const breath = 1 + Math.sin(t * 0.9) * 0.03;
    root.scale.setScalar(breath);
    root.rotation.y = t * 0.38 + mouse.x;
    root.rotation.x = t * 0.14 + mouse.y;
    shell.rotation.z = t * 0.11;
    shell2.rotation.y = -t * 0.16;
    shell2.rotation.x = t * 0.08;
    core.rotation.y = -t * 1.15;
    core.rotation.z = t * 0.4;
    nucleus.rotation.x = t * 1.6;
    rings.forEach((ring, i) => {
      ring.rotation.z = t * (0.18 + i * 0.07) * (i % 2 ? -1 : 1);
    });
    satellites.forEach((s) => {
      const a = t * s.speed + s.phase;
      s.mesh.position.set(
        Math.cos(a) * s.radius,
        Math.sin(a * 0.7) * s.tilt,
        Math.sin(a) * s.radius,
      );
      s.mesh.rotation.x = t * 1.2;
      s.mesh.rotation.y = t * 0.9;
    });
    particles.rotation.y = t * 0.07;
    dust.rotation.y = -t * 0.045;
    dust.rotation.x = t * 0.02;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", resize);
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}

/**
 * Orbit cluster for experience / dark bands.
 */
export function initOrbitScene(container, { compact = false } = {}) {
  if (!container || prefersReduced()) return () => {};
  if (!compact && window.matchMedia("(max-width: 768px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.z = compact ? 3.2 : 3.8;

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  scene.add(root);

  const lime = 0xc8e86a;
  const mid = 0x34d399;
  const dim = 0x1a5c2e;

  const hub = wire(root, new THREE.IcosahedronGeometry(0.55, 0), lime, 0.55);
  const outer = wire(root, new THREE.TorusKnotGeometry(0.85, 0.08, 120, 12), dim, 0.35);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.35, 0.01, 8, 80),
    new THREE.MeshBasicMaterial({ color: mid, transparent: true, opacity: 0.4 }),
  );
  ring.rotation.x = Math.PI / 2.4;
  root.add(ring);

  const nodes = [];
  for (let i = 0; i < 5; i++) {
    const n = solid(root, new THREE.SphereGeometry(0.05, 10, 10), lime, 0.8);
    nodes.push({ mesh: n, r: 1.1 + i * 0.08, speed: 0.5 + i * 0.12, phase: i * 1.2 });
  }
  const particles = makeParticles(root, 90, lime, 2.1, 0.014);

  const mouse = { x: 0, y: 0 };
  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 0.5;
    mouse.y = ((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 0.35;
  };
  window.addEventListener("mousemove", onMove, { passive: true });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  resize();
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);
  window.addEventListener("resize", resize);

  let t = 0;
  let raf = 0;
  const animate = () => {
    t += 0.01;
    root.rotation.y = t * 0.35 + mouse.x;
    root.rotation.x = 0.25 + mouse.y + Math.sin(t * 0.4) * 0.08;
    hub.rotation.y = -t * 0.9;
    outer.rotation.x = t * 0.45;
    outer.rotation.y = t * 0.3;
    ring.rotation.z = t * 0.55;
    nodes.forEach((n) => {
      const a = t * n.speed + n.phase;
      n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a * 1.4) * 0.35, Math.sin(a) * n.r);
    });
    particles.rotation.y = t * 0.1;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", resize);
    if (ro) ro.disconnect();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}

/**
 * Lattice / crystal for light-cream sections.
 */
export function initLatticeScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (window.matchMedia("(max-width: 768px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
  camera.position.z = 4.2;

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  scene.add(root);

  const forest = 0x0d6b48;
  const lime = 0xc8e86a;
  const mid = 0x34d399;

  const crystal = wire(root, new THREE.OctahedronGeometry(0.9, 0), forest, 0.55);
  const frame = wire(root, new THREE.BoxGeometry(1.4, 1.4, 1.4), mid, 0.18);
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.008, 8, 100),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.35 }),
  );
  halo.rotation.x = Math.PI / 2.6;
  root.add(halo);

  const floaters = [];
  for (let i = 0; i < 8; i++) {
    const f = wire(root, new THREE.TetrahedronGeometry(0.1, 0), i % 2 ? forest : lime, 0.45);
    floaters.push({
      mesh: f,
      r: 1.6 + (i % 4) * 0.25,
      speed: 0.25 + i * 0.05,
      phase: i * 0.7,
    });
  }
  const particles = makeParticles(root, 70, forest, 2.6, 0.012);

  const mouse = { x: 0, y: 0 };
  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 0.4;
    mouse.y = ((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 0.3;
  };
  window.addEventListener("mousemove", onMove, { passive: true });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  resize();
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);
  window.addEventListener("resize", resize);

  let t = 0;
  let raf = 0;
  const animate = () => {
    t += 0.008;
    root.rotation.y = t * 0.28 + mouse.x;
    root.rotation.x = t * 0.1 + mouse.y;
    crystal.rotation.y = -t * 0.7;
    crystal.rotation.z = t * 0.25;
    frame.rotation.x = t * 0.2;
    frame.rotation.y = t * 0.15;
    halo.rotation.z = t * 0.4;
    floaters.forEach((f) => {
      const a = t * f.speed + f.phase;
      f.mesh.position.set(Math.cos(a) * f.r, Math.sin(a * 0.85) * 0.55, Math.sin(a) * f.r * 0.75);
      f.mesh.rotation.x = t;
      f.mesh.rotation.y = t * 0.8;
    });
    particles.rotation.y = t * 0.06;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", resize);
    if (ro) ro.disconnect();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}
