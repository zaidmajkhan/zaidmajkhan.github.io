import * as THREE from "three";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNarrow() {
  return window.matchMedia("(max-width: 900px)").matches;
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
 * Saturn-like planet — round globe first, restrained rings.
 * @param {{ spin?: number, bob?: boolean, detail?: "full"|"compact" }} opts
 */
function buildPlanet(colors, scale = 1, opts = {}) {
  const spin = opts.spin ?? 0.14;
  const bob = opts.bob !== false;
  const detail = opts.detail ?? "full";
  const group = new THREE.Group();
  group.scale.setScalar(scale);

  const body = new THREE.Group();
  group.add(body);

  const segs = detail === "full" ? 64 : 48;
  const ringsSegs = detail === "full" ? 160 : 120;

  /* Soft volume so the silhouette reads as a round ball */
  const fill = new THREE.Mesh(
    new THREE.SphereGeometry(1.0, segs, Math.round(segs * 0.75)),
    new THREE.MeshBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    }),
  );
  body.add(fill);

  const inner = new THREE.Mesh(
    new THREE.SphereGeometry(0.78, 36, 28),
    new THREE.MeshBasicMaterial({
      color: colors.soft,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    }),
  );
  body.add(inner);

  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(1.02, segs, Math.round(segs * 0.75)),
    new THREE.MeshBasicMaterial({
      color: colors.primary,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    }),
  );
  body.add(shell);

  const longitude = new THREE.Mesh(
    new THREE.SphereGeometry(1.015, 18, Math.round(segs * 0.75)),
    new THREE.MeshBasicMaterial({
      color: colors.mid,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    }),
  );
  body.add(longitude);

  const rings = new THREE.Group();
  rings.rotation.x = Math.PI / 2.35;
  rings.rotation.z = 0.22;
  group.add(rings);

  /* Tighter, thinner rings so the globe stays the round hero */
  const ringDisc = new THREE.Mesh(
    new THREE.RingGeometry(1.18, 1.72, ringsSegs),
    new THREE.MeshBasicMaterial({
      color: colors.soft,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  rings.add(ringDisc);

  const ringSpecs = [
    { r: 1.22, tube: 0.01, color: colors.primary, op: 0.5 },
    { r: 1.45, tube: 0.012, color: colors.soft, op: 0.45 },
    { r: 1.66, tube: 0.007, color: colors.mid, op: 0.3 },
  ];
  const ringMeshes = ringSpecs.map((spec) => {
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(spec.r, spec.tube, 8, ringsSegs),
      new THREE.MeshBasicMaterial({
        color: spec.color,
        transparent: true,
        opacity: spec.op,
        depthWrite: false,
      }),
    );
    rings.add(mesh);
    return mesh;
  });

  const moons = [];
  if (detail === "full") {
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 16, 16),
      new THREE.MeshBasicMaterial({
        color: colors.mid,
        transparent: true,
        opacity: 0.65,
      }),
    );
    group.add(moon);
    moons.push({ mesh: moon, phase: 0.6, r: 1.95, speed: 0.28, tilt: 0.08 });
  }

  const baseY = 0;
  return {
    group,
    tick(t) {
      body.rotation.y = t * spin;
      shell.rotation.y = t * spin * 0.12;
      longitude.rotation.y = -t * spin * 0.2;
      rings.rotation.z = 0.22 + Math.sin(t * 0.1) * 0.02;
      ringMeshes.forEach((m, i) => {
        m.rotation.z = t * (0.025 + i * 0.008) * (i % 2 ? -1 : 1);
      });
      ringDisc.rotation.z = t * 0.02;
      moons.forEach((m) => {
        const a = t * m.speed + m.phase;
        m.mesh.position.set(Math.cos(a) * m.r, Math.sin(a * 0.5) * m.tilt, Math.sin(a) * m.r * 0.35);
      });
      if (bob) group.position.y = baseY + Math.sin(t * 0.35) * 0.04;
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
 * Hero — interest field on forest (systems + signal + process accents).
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (isNarrow()) return () => {};

  const colors = palette("forest");
  const systems = buildSystems(colors, 0.92);
  const signal = buildSignal(colors, 0.72);
  const processMotif = buildProcess(colors, 0.62);
  const care = buildCare(colors, 0.55);

  systems.group.position.set(1.15, 0.35, 0);
  signal.group.position.set(-1.55, 0.95, -0.6);
  processMotif.group.position.set(1.75, -0.95, -0.5);
  care.group.position.set(-1.4, -0.85, -0.35);

  const extras = { ribbon: null, halo: null, dust: null, dust2: null };

  const { dispose, world } = runScene(container, {
    fov: 38,
    z: 5.1,
    pointer: 0.22,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.45;
      w.rotation.x = target.y * 0.3;
      systems.tick(t * 0.85);
      systems.group.position.y = 0.35 + Math.sin(t * 0.6) * 0.06;
      signal.tick(t * 0.9);
      signal.group.position.y = 0.95 + Math.sin(t * 0.55 + 1) * 0.07;
      processMotif.tick(t * 0.8);
      processMotif.group.position.y = -0.95 + Math.cos(t * 0.5) * 0.06;
      care.tick(t * 0.75);
      care.group.position.y = -0.85 + Math.cos(t * 0.45 + 0.4) * 0.06;
      if (extras.ribbon) extras.ribbon.rotation.y = t * 0.05;
      if (extras.halo) extras.halo.rotation.z = t * 0.07;
      if (extras.dust) extras.dust.rotation.y = t * 0.035;
      if (extras.dust2) extras.dust2.rotation.y = -t * 0.025;
    },
  });

  world.add(systems.group, signal.group, processMotif.group, care.group);
  extras.ribbon = makeOrbitRibbon(world, colors.primary, 0.12);
  extras.ribbon.scale.setScalar(0.72);
  extras.halo = new THREE.Mesh(
    new THREE.TorusGeometry(1.7, 0.004, 8, 120),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.14 }),
  );
  extras.halo.rotation.x = Math.PI / 2.5;
  world.add(extras.halo);
  extras.dust = makeParticles(world, 100, colors.primary, 4.2, 0.014, 0.28);
  extras.dust2 = makeParticles(world, 45, colors.soft, 5, 0.011, 0.18);

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
 * Intro loader — Saturn centerpiece + interest field on cream.
 */
export function initIntroScene(container) {
  if (!container || prefersReduced()) return () => {};

  const colors = palette("cream");
  const planet = buildPlanet(colors, 2.15, { spin: 0.18, bob: true, detail: "full" });
  const systems = buildSystems(colors, 0.72);
  const care = buildCare(colors, 0.68);
  const signal = buildSignal(colors, 0.64);
  const processMotif = buildProcess(colors, 0.58);

  planet.group.position.set(0.35, 0.08, 0);
  systems.group.position.set(3.05, 1.35, -0.7);
  care.group.position.set(-3.1, -1.2, 0.05);
  signal.group.position.set(-2.85, 1.55, -0.75);
  processMotif.group.position.set(2.9, -1.4, -0.5);

  const accents = [];
  const accentSpecs = [
    { pos: [0.55, 2.05, -1.25], geo: () => new THREE.BoxGeometry(0.28, 0.28, 0.28), color: colors.primary, op: 0.24 },
    { pos: [-0.45, -2.0, -1.05], geo: () => new THREE.DodecahedronGeometry(0.24, 0), color: colors.mid, op: 0.26 },
    { pos: [3.35, 0.05, -1.5], geo: () => new THREE.OctahedronGeometry(0.26, 0), color: colors.soft, op: 0.22 },
    { pos: [-3.4, -0.05, -1.45], geo: () => new THREE.IcosahedronGeometry(0.26, 0), color: colors.primary, op: 0.22 },
  ];
  const extras = {
    ribbon: null,
    ribbon2: null,
    halo: null,
    halo2: null,
    dust: null,
    dust2: null,
    dustNear: null,
  };

  const { dispose, world } = runScene(container, {
    fov: 38,
    z: 6.6,
    pointer: 0.18,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.24;
      w.rotation.x = target.y * 0.14;

      planet.tick(t);
      planet.group.position.x = 0.35;
      planet.group.position.z = 0;
      planet.group.position.y = 0.08 + Math.sin(t * 0.4) * 0.04;

      systems.group.position.x = 3.05;
      systems.group.position.z = -0.7;
      care.group.position.x = -3.1;
      care.group.position.z = 0.05;
      signal.group.position.x = -2.85;
      signal.group.position.z = -0.75;
      processMotif.group.position.x = 2.9;
      processMotif.group.position.z = -0.5;

      systems.tick(t);
      systems.group.position.y = 1.35 + Math.sin(t * 0.7) * 0.08;
      care.tick(t);
      care.group.position.y = -1.2 + Math.cos(t * 0.55) * 0.07;
      signal.tick(t);
      signal.group.position.y = 1.55 + Math.sin(t * 0.6 + 1) * 0.09;
      processMotif.tick(t);
      processMotif.group.position.y = -1.4 + Math.cos(t * 0.65 + 0.5) * 0.08;

      accents.forEach((a) => {
        a.group.rotation.y = t * 0.25 + a.phase;
        a.group.rotation.x = Math.sin(t * 0.4 + a.phase) * 0.35;
        a.obj.rotation.z = t * 0.2;
        a.group.position.y = a.baseY + Math.sin(t * 0.5 + a.phase) * 0.1;
      });

      if (extras.ribbon) extras.ribbon.rotation.y = t * 0.06;
      if (extras.ribbon2) extras.ribbon2.rotation.x = t * 0.05;
      if (extras.halo) extras.halo.rotation.z = t * 0.08;
      if (extras.halo2) extras.halo2.rotation.z = -t * 0.05;
      if (extras.dust) extras.dust.rotation.y = t * 0.04;
      if (extras.dust2) extras.dust2.rotation.y = -t * 0.03;
      if (extras.dustNear) extras.dustNear.rotation.x = t * 0.025;
    },
  });

  world.add(planet.group, systems.group, care.group, signal.group, processMotif.group);

  extras.ribbon = makeOrbitRibbon(world, colors.primary, 0.14);
  extras.ribbon.scale.setScalar(1.08);
  extras.ribbon2 = makeOrbitRibbon(world, colors.soft, 0.08);
  extras.ribbon2.rotation.z = Math.PI / 2.4;
  extras.ribbon2.scale.setScalar(0.88);

  extras.halo = new THREE.Mesh(
    new THREE.TorusGeometry(2.45, 0.003, 8, 140),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.12 }),
  );
  extras.halo.rotation.x = Math.PI / 2.8;
  world.add(extras.halo);
  extras.halo2 = new THREE.Mesh(
    new THREE.TorusGeometry(3.05, 0.0025, 8, 150),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.08 }),
  );
  extras.halo2.rotation.x = Math.PI / 2.2;
  extras.halo2.rotation.y = 0.35;
  world.add(extras.halo2);

  accentSpecs.forEach((spec, i) => {
    const g = new THREE.Group();
    g.position.set(...spec.pos);
    const obj = lineObj(g, spec.geo(), spec.color, spec.op);
    world.add(g);
    accents.push({ group: g, obj, phase: i * 1.1, baseY: spec.pos[1] });
  });

  extras.dust = makeParticles(world, 140, colors.primary, 6.2, 0.016, 0.28);
  extras.dust2 = makeParticles(world, 60, colors.soft, 6.8, 0.012, 0.18);
  extras.dustNear = makeParticles(world, 32, colors.mid, 3.9, 0.018, 0.14);

  return dispose;
}

/**
 * Persistent Saturn — bigger round globe used as a scroll-progress marker.
 */
export function initPlanetScene(container) {
  if (!container || prefersReduced()) return () => {};

  const colors = {
    primary: 0xc8e86a,
    mid: 0x34d399,
    soft: 0xf7e9dc,
    deep: 0x86efac,
  };
  const planet = buildPlanet(colors, 1.55, { spin: 0.11, bob: false, detail: "compact" });

  const { dispose, world } = runScene(container, {
    fov: 32,
    z: 3.9,
    pointer: 0.08,
    onFrame: ({ t, target, world: w }) => {
      w.rotation.y = target.x * 0.14;
      w.rotation.x = 0.04 + target.y * 0.08;
      planet.tick(t);
      planet.group.rotation.y = t * 0.045;
    },
  });

  planet.group.position.set(0, 0, 0);
  world.add(planet.group);

  return dispose;
}
