import * as THREE from "three";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNarrow() {
  return window.matchMedia("(max-width: 700px)").matches;
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

/** Cream pages use deep greens; forest bands use lime/mint wireforms. */
function palette(tone = "cream") {
  if (tone === "forest") {
    return {
      primary: 0xc8e86a,
      mid: 0x34d399,
      soft: 0xf7e9dc,
      deep: 0x86efac,
    };
  }
  return {
    primary: 0x0d6b48,
    mid: 0x34d399,
    soft: 0xc8e86a,
    deep: 0x002800,
  };
}

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

/** Systems lattice — ISE / design */
function buildSystems(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);
  const shell = lineObj(group, new THREE.IcosahedronGeometry(0.98, 1), colors.primary, 0.5);
  const core = lineObj(group, new THREE.OctahedronGeometry(0.4, 0), colors.soft, 0.58);
  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.18, 0),
    new THREE.MeshBasicMaterial({
      color: colors.soft,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    }),
  );
  group.add(inner);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.008, 10, 110),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.4 }),
  );
  ring.rotation.x = Math.PI / 2.6;
  group.add(ring);
  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.42, 0.004, 8, 100),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.22 }),
  );
  ring2.rotation.y = Math.PI / 3;
  group.add(ring2);

  const baseY = 0;
  return {
    group,
    tick(t) {
      group.rotation.y = t * 0.35;
      group.rotation.x = Math.sin(t * 0.4) * 0.15;
      shell.rotation.z = t * 0.12;
      core.rotation.y = -t * 0.7;
      inner.rotation.x = t * 0.9;
      ring.rotation.z = t * 0.25;
      ring2.rotation.z = -t * 0.18;
      group.position.y = baseY + Math.sin(t * 0.7) * 0.08;
    },
  };
}

/** Care flow — healthcare / pharmacy ops */
function buildCare(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);
  const capsule = lineObj(group, new THREE.CapsuleGeometry(0.3, 0.9, 6, 14), colors.mid, 0.52);
  capsule.rotation.z = Math.PI / 5;
  const shell = lineObj(group, new THREE.SphereGeometry(0.78, 12, 12), colors.primary, 0.18);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.12, 0.007, 10, 100),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.4 }),
  );
  ring.rotation.x = Math.PI / 2.2;
  ring.rotation.y = 0.4;
  group.add(ring);
  const nodes = [];
  for (let i = 0; i < 6; i++) {
    const n = new THREE.Mesh(
      new THREE.SphereGeometry(0.048, 10, 10),
      new THREE.MeshBasicMaterial({
        color: i % 2 ? colors.soft : colors.mid,
        transparent: true,
        opacity: 0.72,
      }),
    );
    group.add(n);
    nodes.push({ mesh: n, phase: (i / 6) * Math.PI * 2, r: 1.12 });
  }
  const baseY = 0;
  return {
    group,
    tick(t) {
      group.rotation.y = -t * 0.28;
      capsule.rotation.y = t * 0.5;
      shell.rotation.y = t * 0.15;
      ring.rotation.z = t * 0.4;
      nodes.forEach((n) => {
        const a = t * 0.7 + n.phase;
        n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a * 1.2) * 0.25, Math.sin(a) * n.r);
      });
      group.position.y = baseY + Math.cos(t * 0.55) * 0.07;
    },
  };
}

/** Signal — AI / build */
function buildSignal(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);
  const tet = lineObj(group, new THREE.TetrahedronGeometry(0.78, 0), colors.primary, 0.52);
  const tet2 = lineObj(group, new THREE.TetrahedronGeometry(0.44, 0), colors.soft, 0.42);
  const tet3 = lineObj(group, new THREE.OctahedronGeometry(0.22, 0), colors.mid, 0.35);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.02, 0.005, 8, 90),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.32 }),
  );
  ring.rotation.x = Math.PI / 3;
  group.add(ring);
  const nodes = [];
  for (let i = 0; i < 3; i++) {
    const n = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      new THREE.MeshBasicMaterial({ color: colors.soft, transparent: true, opacity: 0.65 }),
    );
    group.add(n);
    nodes.push({ mesh: n, phase: (i / 3) * Math.PI * 2, r: 1.02 });
  }
  const baseY = 0;
  return {
    group,
    tick(t) {
      group.rotation.y = t * 0.45;
      group.rotation.z = Math.sin(t * 0.5) * 0.2;
      tet.rotation.x = t * 0.3;
      tet2.rotation.y = -t * 0.55;
      tet3.rotation.z = t * 0.8;
      ring.rotation.z = t * 0.35;
      nodes.forEach((n) => {
        const a = -t * 0.85 + n.phase;
        n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a) * 0.35, Math.sin(a) * n.r * 0.6);
      });
      group.position.y = baseY + Math.sin(t * 0.6 + 1) * 0.09;
    },
  };
}

/** Process knot — ops / improve */
function buildProcess(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);
  const knot = lineObj(group, new THREE.TorusKnotGeometry(0.58, 0.15, 100, 12), colors.deep, 0.44);
  const soft = lineObj(group, new THREE.TorusKnotGeometry(0.38, 0.06, 80, 8), colors.soft, 0.28);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.02, 0.006, 8, 90),
    new THREE.MeshBasicMaterial({ color: colors.soft, transparent: true, opacity: 0.3 }),
  );
  ring.rotation.x = Math.PI / 2.4;
  group.add(ring);
  const baseY = 0;
  return {
    group,
    tick(t) {
      group.rotation.x = t * 0.32;
      group.rotation.y = t * 0.22;
      knot.rotation.z = t * 0.4;
      soft.rotation.x = -t * 0.35;
      ring.rotation.z = -t * 0.3;
      group.position.y = baseY + Math.cos(t * 0.65 + 0.5) * 0.08;
    },
  };
}

/**
 * Professional Saturn logo mark in 3D — solid body + one clean ring.
 * @param {{ spin?: number, bob?: boolean }} opts
 */
function buildPlanet(colors, scale = 1, opts = {}) {
  const spin = opts.spin ?? 0.12;
  const bob = opts.bob !== false;
  const ink = colors.deep ?? colors.primary;
  const group = new THREE.Group();
  group.scale.setScalar(scale);

  const body = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 48, 36),
    new THREE.MeshBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.88,
    }),
  );
  group.add(body);

  const highlight = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 24),
    new THREE.MeshBasicMaterial({
      color: colors.soft ?? ink,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    }),
  );
  highlight.position.set(0.12, 0.16, 0.35);
  group.add(highlight);

  const rings = new THREE.Group();
  rings.rotation.x = Math.PI / 2.35;
  rings.rotation.z = 0.35;
  group.add(rings);

  const disc = new THREE.Mesh(
    new THREE.RingGeometry(0.95, 1.72, 96),
    new THREE.MeshBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  rings.add(disc);

  const gap = new THREE.Mesh(
    new THREE.RingGeometry(1.22, 1.34, 80),
    new THREE.MeshBasicMaterial({
      color: colors.soft ?? 0xf7e9dc,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  rings.add(gap);

  const rimOuter = new THREE.Mesh(
    new THREE.TorusGeometry(1.72, 0.014, 8, 100),
    new THREE.MeshBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    }),
  );
  rings.add(rimOuter);

  const rimInner = new THREE.Mesh(
    new THREE.TorusGeometry(0.95, 0.012, 8, 90),
    new THREE.MeshBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    }),
  );
  rings.add(rimInner);

  const baseY = 0;
  return {
    group,
    tick(t) {
      body.rotation.y = t * spin;
      rings.rotation.z = 0.35 + t * spin * 0.45;
      disc.rotation.z = t * 0.02;
      if (bob) group.position.y = baseY + Math.sin(t * 0.4) * 0.04;
    },
  };
}

/** Wireframe locomotive — rolls across the intro. */
function buildTrain(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);

  const cabin = lineObj(group, new THREE.BoxGeometry(0.55, 0.42, 0.5), colors.primary, 0.55);
  cabin.position.set(-0.15, 0.32, 0);

  const boiler = lineObj(group, new THREE.CylinderGeometry(0.2, 0.22, 0.85, 12), colors.deep ?? colors.primary, 0.5);
  boiler.rotation.z = Math.PI / 2;
  boiler.position.set(0.45, 0.22, 0);

  const nose = lineObj(group, new THREE.ConeGeometry(0.2, 0.28, 10), colors.mid, 0.45);
  nose.rotation.z = -Math.PI / 2;
  nose.position.set(0.98, 0.22, 0);

  const stack = lineObj(group, new THREE.CylinderGeometry(0.08, 0.1, 0.28, 8), colors.soft, 0.5);
  stack.position.set(0.55, 0.55, 0);

  const base = lineObj(group, new THREE.BoxGeometry(1.35, 0.12, 0.48), colors.primary, 0.4);
  base.position.set(0.2, 0.06, 0);

  const wheels = [];
  [-0.25, 0.15, 0.55].forEach((x, i) => {
    const w = lineObj(group, new THREE.TorusGeometry(0.14 + (i === 0 ? 0.03 : 0), 0.03, 6, 16), colors.mid, 0.55);
    w.rotation.y = Math.PI / 2;
    w.position.set(x, 0.0, 0.26);
    const w2 = w.clone();
    w2.position.z = -0.26;
    group.add(w2);
    wheels.push(w, w2);
  });

  const car = new THREE.Group();
  lineObj(car, new THREE.BoxGeometry(0.7, 0.36, 0.46), colors.soft, 0.4);
  car.position.set(-1.05, 0.24, 0);
  group.add(car);

  const coupler = lineObj(group, new THREE.BoxGeometry(0.2, 0.06, 0.08), colors.primary, 0.35);
  coupler.position.set(-0.55, 0.12, 0);

  return {
    group,
    tick(t, speed = 1) {
      wheels.forEach((w) => {
        w.rotation.z -= 0.35 * speed;
      });
      stack.rotation.y = t * 0.8;
    },
  };
}


const MOTIF_BUILDERS = {
  systems: buildSystems,
  care: buildCare,
  signal: buildSignal,
  process: buildProcess,
  planet: buildPlanet,
};

/**
 * Shared scene runner. Returns dispose. Controllers can call setPaused.
 */
function runScene(container, { fov = 38, z = 4.2, pointer = 0.25, onFrame }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
  camera.position.z = z;
  const renderer = makeRenderer(container);
  const world = new THREE.Group();
  scene.add(world);

  const mouse = { x: 0, y: 0 };
  const unbindPointer = bindPointer(container, mouse, pointer);
  const unbindResize = bindResize(container, camera, renderer);

  let t = 0;
  let raf = 0;
  let paused = false;
  const target = { x: 0, y: 0 };

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (paused) return;
    t += 0.007;
    target.x += (mouse.x - target.x) * 0.045;
    target.y += (mouse.y - target.y) * 0.045;
    onFrame({ t, target, world, mouse });
    renderer.render(scene, camera);
  };
  /* Defer first frame so callers can finish binding `world` after runScene returns */
  raf = requestAnimationFrame(animate);

  const dispose = () => {
    cancelAnimationFrame(raf);
    unbindPointer();
    unbindResize();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };

  dispose.setPaused = (v) => {
    paused = Boolean(v);
  };
  dispose.world = world;
  dispose.scene = scene;

  return { dispose, world, scene, camera, renderer };
}

/**
 * Single interest motif for section mounts.
 * @param {"systems"|"care"|"signal"|"process"} motif
 * @param {"cream"|"forest"} tone
 */
export function initMotifScene(
  container,
  { motif = "systems", tone = "cream", compact = false, desktopOnly = true } = {},
) {
  if (!container || prefersReduced()) return () => {};
  if (desktopOnly && isNarrow()) return () => {};

  const colors = palette(tone);
  const builder = MOTIF_BUILDERS[motif] || buildSystems;
  const piece = builder(colors, compact ? 0.85 : 1);
  const dustCount = compact ? 28 : 48;
  const extras = { dust: null, ring: null };

  const { dispose, world } = runScene(container, {
    fov: compact ? 36 : 38,
    z: compact ? 3.5 : 4.1,
    pointer: 0.28,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.9;
      w.rotation.x = 0.12 + target.y * 0.7;
      piece.tick(t);
      if (extras.dust) extras.dust.rotation.y = t * 0.05;
      if (extras.ring) extras.ring.rotation.z = t * 0.12;
    },
  });

  world.add(piece.group);
  extras.dust = makeParticles(world, dustCount, colors.soft, compact ? 1.7 : 2.2, 0.012, 0.32);
  extras.ring = new THREE.Mesh(
    new THREE.TorusGeometry(compact ? 1.35 : 1.55, 0.004, 8, 100),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.16 }),
  );
  extras.ring.rotation.x = Math.PI / 2.6;
  world.add(extras.ring);

  return dispose;
}

/**
 * Hero — one primary systems motif + one soft signal accent.
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (isNarrow()) return () => {};

  const colors = palette("forest");
  const systems = buildSystems(colors, 1.05);
  const signal = buildSignal(colors, 0.55);

  systems.group.position.set(1.35, 0.15, -0.15);
  signal.group.position.set(-1.75, 0.75, -0.85);

  const extras = { dust: null };

  const { dispose, world } = runScene(container, {
    fov: 36,
    z: 5.2,
    pointer: 0.18,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.32;
      w.rotation.x = target.y * 0.2;
      systems.tick(t * 0.7);
      systems.group.position.y = 0.15 + Math.sin(t * 0.45) * 0.045;
      signal.tick(t * 0.6);
      signal.group.position.y = 0.75 + Math.sin(t * 0.4 + 1) * 0.05;
      if (extras.dust) extras.dust.rotation.y = t * 0.025;
    },
  });

  world.add(systems.group, signal.group);
  extras.dust = makeParticles(world, 55, colors.primary, 4.0, 0.012, 0.2);

  return dispose;
}

/** @deprecated alias — process motif on forest */
export function initOrbitScene(container, { compact = false } = {}) {
  return initMotifScene(container, { motif: "process", tone: "forest", compact, desktopOnly: !compact });
}

/** @deprecated alias — systems motif on cream */
export function initLatticeScene(container) {
  return initMotifScene(container, { motif: "systems", tone: "cream" });
}

/**
 * Intro loader — train crossing + mini flybys (no Saturn).
 */
export function initIntroScene(container) {
  if (!container || prefersReduced()) return () => {};

  const colors = palette("cream");
  const train = buildTrain(colors, 1.05);

  const flyers = [];
  const flyerSpecs = [
    { geo: () => new THREE.IcosahedronGeometry(0.22, 0), color: colors.primary, y: 1.35, z: -0.8, speed: 1.15, phase: 0.0, spin: 0.9 },
    { geo: () => new THREE.OctahedronGeometry(0.2, 0), color: colors.soft, y: 0.85, z: -1.1, speed: 0.9, phase: 1.2, spin: 1.1 },
    { geo: () => new THREE.BoxGeometry(0.28, 0.28, 0.28), color: colors.mid, y: -0.95, z: -0.6, speed: 1.05, phase: 2.1, spin: 0.7 },
    { geo: () => new THREE.TetrahedronGeometry(0.24, 0), color: colors.primary, y: -1.35, z: -1.0, speed: 0.8, phase: 0.55, spin: 1.3 },
    { geo: () => new THREE.DodecahedronGeometry(0.18, 0), color: colors.soft, y: 1.75, z: -1.4, speed: 1.25, phase: 2.8, spin: 0.85 },
    { geo: () => new THREE.CapsuleGeometry(0.1, 0.22, 4, 8), color: colors.mid, y: -0.35, z: -1.3, speed: 0.95, phase: 1.7, spin: 1.0 },
  ];

  const track = new THREE.Group();
  const railMat = new THREE.LineBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.22 });
  for (const y of [-0.12, 0.12]) {
    const pts = [new THREE.Vector3(-8, 0, y), new THREE.Vector3(8, 0, y)];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    track.add(new THREE.Line(geo, railMat));
  }
  for (let i = -10; i <= 10; i++) {
    const tie = lineObj(track, new THREE.BoxGeometry(0.08, 0.02, 0.38), colors.primary, 0.16);
    tie.position.set(i * 0.7, -0.08, 0);
  }
  track.position.set(0, -0.85, 0);

  const extras = { dust: null, dust2: null };
  const trainStart = -5.8;
  const trainEnd = 5.8;
  const tripSec = 2.05;
  const startedAt = performance.now();

  const { dispose, world } = runScene(container, {
    fov: 42,
    z: 7.2,
    pointer: 0.12,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.12;
      w.rotation.x = target.y * 0.08;

      /* Smooth left → right pass across the load */
      const elapsed = (performance.now() - startedAt) / 1000;
      const u = Math.min(1, Math.max(0, elapsed / tripSec));
      const ease = u * u * (3 - 2 * u);
      train.group.position.x = trainStart + (trainEnd - trainStart) * ease;
      train.group.position.y = -0.55;
      train.group.position.z = 0.2;
      train.tick(t, 1.2 + ease);

      flyers.forEach((f) => {
        const local = (elapsed * f.speed * 0.35 + f.phase) % 1.0;
        f.group.position.x = 4.8 - local * 9.6;
        f.group.position.y = f.baseY + Math.sin(t * 0.8 + f.phase) * 0.12;
        f.group.position.z = f.baseZ;
        f.group.rotation.x = t * f.spin;
        f.group.rotation.y = t * f.spin * 0.7;
      });

      track.position.x = ((elapsed * 1.4) % 0.7) - 0.35;

      if (extras.dust) extras.dust.rotation.y = t * 0.04;
      if (extras.dust2) extras.dust2.rotation.y = -t * 0.03;
    },
  });

  world.add(train.group, track);

  flyerSpecs.forEach((spec) => {
    const g = new THREE.Group();
    const obj = lineObj(g, spec.geo(), spec.color, 0.42);
    world.add(g);
    flyers.push({
      group: g,
      obj,
      baseY: spec.y,
      baseZ: spec.z,
      speed: spec.speed,
      phase: spec.phase,
      spin: spec.spin,
    });
  });

  extras.dust = makeParticles(world, 90, colors.primary, 6.2, 0.014, 0.22);
  extras.dust2 = makeParticles(world, 40, colors.soft, 7.0, 0.01, 0.14);

  return dispose;
}

/** @deprecated Page marker now uses SVG logo — kept for API compatibility */
export function initPlanetScene(container) {
  if (!container || prefersReduced()) return () => {};
  return () => {};
}
