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

/**
 * Soft polyline between interest motifs — reads as a shared operating system.
 */
function makeOrbitRibbon(group, color, opacity = 0.22) {
  const pts = [];
  for (let i = 0; i <= 128; i++) {
    const a = (i / 128) * Math.PI * 2;
    pts.push(
      new THREE.Vector3(
        Math.cos(a) * 2.55 + Math.sin(a * 2) * 0.18,
        Math.sin(a) * 1.45 + Math.cos(a * 3) * 0.12,
        Math.sin(a * 2) * 0.55,
      ),
    );
  }
  const curve = new THREE.CatmullRomCurve3(pts, true);
  const geo = new THREE.TubeGeometry(curve, 160, 0.008, 5, true);
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
  );
  group.add(mesh);
  return mesh;
}

/**
 * Intro loader scene — interest-led wireforms that fill the cream field on their own.
 */
export function initIntroScene(container) {
  if (!container || prefersReduced()) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
  camera.position.z = 5.85;

  const renderer = makeRenderer(container);
  const world = new THREE.Group();
  scene.add(world);

  const forest = 0x0d6b48;
  const mid = 0x34d399;
  const lime = 0xc8e86a;
  const deep = 0x002800;

  /* Ambient particle field — denser so empty mid-space still feels alive */
  const dust = makeParticles(world, 160, forest, 5.8, 0.018, 0.32);
  const dust2 = makeParticles(world, 70, lime, 6.4, 0.013, 0.22);
  const dustNear = makeParticles(world, 40, mid, 3.6, 0.02, 0.18);

  /* Soft linking ribbon tying the four motifs together */
  const ribbon = makeOrbitRibbon(world, forest, 0.18);
  const ribbon2 = makeOrbitRibbon(world, lime, 0.1);
  ribbon2.rotation.z = Math.PI / 2.4;
  ribbon2.scale.setScalar(0.78);

  /* Quiet depth rings behind mark */
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.004, 8, 120),
    new THREE.MeshBasicMaterial({ color: forest, transparent: true, opacity: 0.16 }),
  );
  halo.rotation.x = Math.PI / 2.8;
  world.add(halo);
  const halo2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.15, 0.003, 8, 140),
    new THREE.MeshBasicMaterial({ color: mid, transparent: true, opacity: 0.1 }),
  );
  halo2.rotation.x = Math.PI / 2.2;
  halo2.rotation.y = 0.35;
  world.add(halo2);

  /* 01 — Systems lattice (ISE) */
  const systems = new THREE.Group();
  systems.position.set(2.2, 1.05, -0.35);
  systems.scale.setScalar(1.05);
  world.add(systems);
  const sysShell = lineObj(systems, new THREE.IcosahedronGeometry(0.98, 1), forest, 0.48);
  const sysCore = lineObj(systems, new THREE.OctahedronGeometry(0.4, 0), lime, 0.58);
  const sysInner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.18, 0),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.28, depthWrite: false }),
  );
  systems.add(sysInner);
  const sysRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.008, 10, 110),
    new THREE.MeshBasicMaterial({ color: mid, transparent: true, opacity: 0.38 }),
  );
  sysRing.rotation.x = Math.PI / 2.6;
  systems.add(sysRing);
  const sysRing2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.42, 0.004, 8, 100),
    new THREE.MeshBasicMaterial({ color: forest, transparent: true, opacity: 0.22 }),
  );
  sysRing2.rotation.y = Math.PI / 3;
  systems.add(sysRing2);

  /* 02 — Care flow (healthcare / pharmacy ops) */
  const care = new THREE.Group();
  care.position.set(-2.3, -0.9, 0.15);
  care.scale.setScalar(1);
  world.add(care);
  const capsule = lineObj(care, new THREE.CapsuleGeometry(0.3, 0.9, 6, 14), mid, 0.52);
  capsule.rotation.z = Math.PI / 5;
  const careShell = lineObj(care, new THREE.SphereGeometry(0.78, 12, 12), forest, 0.18);
  const careRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.12, 0.007, 10, 100),
    new THREE.MeshBasicMaterial({ color: forest, transparent: true, opacity: 0.4 }),
  );
  careRing.rotation.x = Math.PI / 2.2;
  careRing.rotation.y = 0.4;
  care.add(careRing);
  const careNodes = [];
  for (let i = 0; i < 6; i++) {
    const n = new THREE.Mesh(
      new THREE.SphereGeometry(0.048, 10, 10),
      new THREE.MeshBasicMaterial({ color: i % 2 ? lime : mid, transparent: true, opacity: 0.72 }),
    );
    care.add(n);
    careNodes.push({ mesh: n, phase: (i / 6) * Math.PI * 2, r: 1.12 });
  }

  /* 03 — Signal / AI build */
  const signal = new THREE.Group();
  signal.position.set(-2.0, 1.25, -0.5);
  signal.scale.setScalar(0.95);
  world.add(signal);
  const tet = lineObj(signal, new THREE.TetrahedronGeometry(0.78, 0), forest, 0.52);
  const tet2 = lineObj(signal, new THREE.TetrahedronGeometry(0.44, 0), lime, 0.42);
  const tet3 = lineObj(signal, new THREE.OctahedronGeometry(0.22, 0), mid, 0.35);
  const signalRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.02, 0.005, 8, 90),
    new THREE.MeshBasicMaterial({ color: mid, transparent: true, opacity: 0.32 }),
  );
  signalRing.rotation.x = Math.PI / 3;
  signal.add(signalRing);
  const signalNodes = [];
  for (let i = 0; i < 3; i++) {
    const n = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.65 }),
    );
    signal.add(n);
    signalNodes.push({ mesh: n, phase: (i / 3) * Math.PI * 2, r: 1.02 });
  }

  /* 04 — Process loop (ops) */
  const process = new THREE.Group();
  process.position.set(2.05, -1.1, -0.25);
  process.scale.setScalar(0.82);
  world.add(process);
  const knot = lineObj(process, new THREE.TorusKnotGeometry(0.58, 0.15, 100, 12), deep, 0.44);
  const knotSoft = lineObj(process, new THREE.TorusKnotGeometry(0.38, 0.06, 80, 8), lime, 0.28);
  const pRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.02, 0.006, 8, 90),
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.3 }),
  );
  pRing.rotation.x = Math.PI / 2.4;
  process.add(pRing);

  /* Mid accents — small orthogons so center / edges aren't empty */
  const accents = [];
  const accentSpecs = [
    { pos: [0.15, 1.85, -1.1], geo: () => new THREE.BoxGeometry(0.35, 0.35, 0.35), color: forest, op: 0.28 },
    { pos: [-0.2, -1.75, -0.9], geo: () => new THREE.DodecahedronGeometry(0.28, 0), color: mid, op: 0.3 },
    { pos: [3.15, 0.15, -1.4], geo: () => new THREE.OctahedronGeometry(0.32, 0), color: lime, op: 0.26 },
    { pos: [-3.2, 0.05, -1.35], geo: () => new THREE.IcosahedronGeometry(0.3, 0), color: forest, op: 0.26 },
  ];
  accentSpecs.forEach((spec, i) => {
    const g = new THREE.Group();
    g.position.set(...spec.pos);
    const obj = lineObj(g, spec.geo(), spec.color, spec.op);
    world.add(g);
    accents.push({ group: g, obj, phase: i * 1.1, baseY: spec.pos[1] });
  });

  const mouse = { x: 0, y: 0 };
  const unbindPointer = bindPointer(container, mouse, 0.22);
  const unbindResize = bindResize(container, camera, renderer);

  let t = 0;
  let raf = 0;
  const target = { x: 0, y: 0 };
  const animate = () => {
    t += 0.0085;
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;

    world.rotation.y = target.x * 0.32;
    world.rotation.x = target.y * 0.22;

    systems.rotation.y = t * 0.35;
    systems.rotation.x = Math.sin(t * 0.4) * 0.15;
    sysShell.rotation.z = t * 0.12;
    sysCore.rotation.y = -t * 0.7;
    sysInner.rotation.x = t * 0.9;
    sysRing.rotation.z = t * 0.25;
    sysRing2.rotation.z = -t * 0.18;
    systems.position.y = 1.05 + Math.sin(t * 0.7) * 0.08;

    care.rotation.y = -t * 0.28;
    capsule.rotation.y = t * 0.5;
    careShell.rotation.y = t * 0.15;
    careRing.rotation.z = t * 0.4;
    careNodes.forEach((n) => {
      const a = t * 0.7 + n.phase;
      n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a * 1.2) * 0.25, Math.sin(a) * n.r);
    });
    care.position.y = -0.9 + Math.cos(t * 0.55) * 0.07;

    signal.rotation.y = t * 0.45;
    signal.rotation.z = Math.sin(t * 0.5) * 0.2;
    tet.rotation.x = t * 0.3;
    tet2.rotation.y = -t * 0.55;
    tet3.rotation.z = t * 0.8;
    signalRing.rotation.z = t * 0.35;
    signalNodes.forEach((n) => {
      const a = -t * 0.85 + n.phase;
      n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a) * 0.35, Math.sin(a) * n.r * 0.6);
    });
    signal.position.y = 1.25 + Math.sin(t * 0.6 + 1) * 0.09;

    process.rotation.x = t * 0.32;
    process.rotation.y = t * 0.22;
    knot.rotation.z = t * 0.4;
    knotSoft.rotation.x = -t * 0.35;
    pRing.rotation.z = -t * 0.3;
    process.position.y = -1.1 + Math.cos(t * 0.65 + 0.5) * 0.08;

    accents.forEach((a) => {
      a.group.rotation.y = t * 0.25 + a.phase;
      a.group.rotation.x = Math.sin(t * 0.4 + a.phase) * 0.35;
      a.obj.rotation.z = t * 0.2;
      a.group.position.y = a.baseY + Math.sin(t * 0.5 + a.phase) * 0.1;
    });

    ribbon.rotation.y = t * 0.06;
    ribbon2.rotation.x = t * 0.05;
    halo.rotation.z = t * 0.08;
    halo2.rotation.z = -t * 0.05;
    dust.rotation.y = t * 0.04;
    dust2.rotation.y = -t * 0.03;
    dustNear.rotation.x = t * 0.025;

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
