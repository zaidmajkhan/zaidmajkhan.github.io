import * as THREE from "three";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function makeRenderer(container) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, {
    width: "100%",
    height: "100%",
    display: "block",
  });
  return renderer;
}

function lineObj(group, geo, color, opacity) {
  const edges = new THREE.EdgesGeometry(geo, 18);
  const lines = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
  );
  group.add(lines);
  return lines;
}

function makeParticles(group, count, color, radius, size, opacity = 0.45) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.55 + Math.random() * 0.55);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity,
      sizeAttenuation: true,
      depthWrite: false,
    }),
  );
  points.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(points);
  return points;
}

function bindPointer(container, mouse, strength = 0.35) {
  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * strength;
    mouse.y = ((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * strength * 0.7;
  };
  window.addEventListener("mousemove", onMove, { passive: true });
  return () => window.removeEventListener("mousemove", onMove);
}

function bindResize(container, camera, renderer) {
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
  return () => {
    window.removeEventListener("resize", resize);
    if (ro) ro.disconnect();
  };
}

/**
 * Hero — restrained crystal + single ring + soft dust.
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (window.matchMedia("(max-width: 900px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  camera.position.set(0.2, 0.05, 4.5);

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  root.position.set(0.55, 0.1, 0);
  scene.add(root);

  const lime = 0xc8e86a;
  const mid = 0x34d399;
  const deep = 0x1a5c2e;

  const crystal = lineObj(root, new THREE.IcosahedronGeometry(1.15, 1), mid, 0.4);
  const core = lineObj(root, new THREE.OctahedronGeometry(0.42, 0), lime, 0.65);
  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.22, 0),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.22, depthWrite: false }),
  );
  root.add(inner);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.65, 0.008, 12, 140),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.32 }),
  );
  ring.rotation.x = Math.PI / 2.35;
  ring.rotation.y = 0.25;
  root.add(ring);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.9, 0.004, 10, 120),
    new THREE.MeshBasicMaterial({ color: deep, transparent: true, opacity: 0.35 }),
  );
  ring2.rotation.x = Math.PI / 3.4;
  ring2.rotation.z = 0.4;
  root.add(ring2);

  const dust = makeParticles(root, 90, lime, 2.5, 0.014, 0.4);

  const mouse = { x: 0, y: 0 };
  const unbindPointer = bindPointer(container, mouse, 0.28);
  const unbindResize = bindResize(container, camera, renderer);

  let t = 0;
  let raf = 0;
  const target = { x: 0, y: 0 };
  const animate = () => {
    t += 0.0055;
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;

    root.rotation.y = t * 0.22 + target.x;
    root.rotation.x = 0.18 + Math.sin(t * 0.35) * 0.06 + target.y;
    crystal.rotation.y = t * 0.15;
    core.rotation.y = -t * 0.55;
    core.rotation.z = t * 0.2;
    inner.rotation.x = t * 0.8;
    ring.rotation.z = t * 0.12;
    ring2.rotation.z = -t * 0.08;
    dust.rotation.y = t * 0.04;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    unbindPointer();
    unbindResize();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}

/**
 * Compact orbit for dark bands — knot + ring only.
 */
export function initOrbitScene(container, { compact = false } = {}) {
  if (!container || prefersReduced()) return () => {};
  if (!compact && window.matchMedia("(max-width: 900px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
  camera.position.z = compact ? 3.4 : 3.7;

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  scene.add(root);

  const lime = 0xc8e86a;
  const mid = 0x34d399;

  const knot = lineObj(root, new THREE.TorusKnotGeometry(0.7, 0.18, 100, 12), mid, 0.45);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.006, 10, 100),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.35 }),
  );
  ring.rotation.x = Math.PI / 2.5;
  root.add(ring);
  const dust = makeParticles(root, 40, lime, 1.8, 0.012, 0.35);

  const mouse = { x: 0, y: 0 };
  const unbindPointer = bindPointer(container, mouse, 0.25);
  const unbindResize = bindResize(container, camera, renderer);

  let t = 0;
  let raf = 0;
  const target = { x: 0, y: 0 };
  const animate = () => {
    t += 0.007;
    target.x += (mouse.x - target.x) * 0.05;
    target.y += (mouse.y - target.y) * 0.05;
    root.rotation.y = t * 0.28 + target.x;
    root.rotation.x = 0.35 + target.y;
    knot.rotation.x = t * 0.25;
    knot.rotation.y = t * 0.18;
    ring.rotation.z = t * 0.3;
    dust.rotation.y = t * 0.06;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    unbindPointer();
    unbindResize();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}

/**
 * Soft lattice for cream sections.
 */
export function initLatticeScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (window.matchMedia("(max-width: 900px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.z = 4;

  const renderer = makeRenderer(container);
  const root = new THREE.Group();
  scene.add(root);

  const forest = 0x0d6b48;
  const mid = 0x34d399;

  const crystal = lineObj(root, new THREE.OctahedronGeometry(0.95, 0), forest, 0.5);
  const frame = lineObj(root, new THREE.IcosahedronGeometry(1.25, 0), mid, 0.22);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.005, 10, 100),
    new THREE.MeshBasicMaterial({ color: forest, transparent: true, opacity: 0.28 }),
  );
  ring.rotation.x = Math.PI / 2.5;
  root.add(ring);
  const dust = makeParticles(root, 36, forest, 2.2, 0.011, 0.3);

  const mouse = { x: 0, y: 0 };
  const unbindPointer = bindPointer(container, mouse, 0.22);
  const unbindResize = bindResize(container, camera, renderer);

  let t = 0;
  let raf = 0;
  const target = { x: 0, y: 0 };
  const animate = () => {
    t += 0.005;
    target.x += (mouse.x - target.x) * 0.045;
    target.y += (mouse.y - target.y) * 0.045;
    root.rotation.y = t * 0.2 + target.x;
    root.rotation.x = 0.15 + target.y;
    crystal.rotation.y = -t * 0.4;
    frame.rotation.y = t * 0.12;
    frame.rotation.z = t * 0.08;
    ring.rotation.z = t * 0.18;
    dust.rotation.y = t * 0.05;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    unbindPointer();
    unbindResize();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}
