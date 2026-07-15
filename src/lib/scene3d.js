import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

const MOTIF_BUILDERS = {
  systems: buildSystems,
  care: buildCare,
  signal: buildSignal,
  process: buildProcess,
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
  animate();

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
    onFrame: ({ t, target }) => {
      world.rotation.y = target.x * 0.9;
      world.rotation.x = 0.12 + target.y * 0.7;
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
 * Hero — vehicles + medical interest motifs on forest.
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (isNarrow()) return () => {};

  const colors = palette("forest");
  const systems = buildSystems(colors, 0.72);
  const care = buildCare(colors, 0.55);
  const medical = buildMedicalProps(colors, 0.9);

  systems.group.position.set(-1.85, 1.05, -0.55);
  care.group.position.set(-2.0, -0.95, -0.2);
  medical.group.position.set(0.15, -1.25, -0.4);

  const vehicles = { ambulance: null, race: null };
  const extras = { ribbon: null, halo: null, dust: null, dust2: null };

  const { dispose, world } = runScene(container, {
    fov: 38,
    z: 5.4,
    pointer: 0.22,
    onFrame: ({ t, target }) => {
      world.rotation.y = target.x * 0.4;
      world.rotation.x = target.y * 0.28;
      systems.tick(t * 0.85);
      systems.group.position.y = 1.05 + Math.sin(t * 0.6) * 0.06;
      care.tick(t * 0.75);
      care.group.position.y = -0.95 + Math.cos(t * 0.45 + 0.4) * 0.06;
      medical.tick(t);
      if (vehicles.ambulance) {
        vehicles.ambulance.rotation.y = t * 0.28;
        vehicles.ambulance.position.y = 0.15 + Math.sin(t * 0.55) * 0.08;
      }
      if (vehicles.race) {
        vehicles.race.rotation.y = -t * 0.35 + 0.6;
        vehicles.race.position.y = -0.55 + Math.cos(t * 0.5) * 0.07;
      }
      if (extras.ribbon) extras.ribbon.rotation.y = t * 0.05;
      if (extras.halo) extras.halo.rotation.z = t * 0.07;
      if (extras.dust) extras.dust.rotation.y = t * 0.035;
      if (extras.dust2) extras.dust2.rotation.y = -t * 0.025;
    },
  });

  world.add(systems.group, care.group, medical.group);
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

  let cancelled = false;
  (async () => {
    const [ambulance, race] = await Promise.all([
      loadVehicle("ambulance"),
      loadVehicle("race"),
    ]);
    if (cancelled || !ambulance || !race) return;
    ambulance.scale.setScalar(1.15);
    ambulance.position.set(1.55, 0.15, 0.2);
    ambulance.rotation.set(0.15, -0.55, 0.08);
    race.scale.setScalar(1.05);
    race.position.set(2.05, -0.55, -0.55);
    race.rotation.set(0.2, 0.85, -0.05);
    world.add(ambulance, race);
    vehicles.ambulance = ambulance;
    vehicles.race = race;
  })();

  const baseDispose = dispose;
  const wrapped = () => {
    cancelled = true;
    baseDispose();
  };
  wrapped.setPaused = dispose.setPaused;
  return wrapped;
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
 * Intro loader — full interest field on cream.
 */
export function initIntroScene(container) {
  if (!container || prefersReduced()) return () => {};

  const colors = palette("cream");
  const systems = buildSystems(colors, 1.05);
  const care = buildCare(colors, 1);
  const signal = buildSignal(colors, 0.95);
  const process = buildProcess(colors, 0.82);

  systems.group.position.set(2.2, 1.05, -0.35);
  care.group.position.set(-2.3, -0.9, 0.15);
  signal.group.position.set(-2.0, 1.25, -0.5);
  process.group.position.set(2.05, -1.1, -0.25);

  const accents = [];
  const accentSpecs = [
    { pos: [0.15, 1.85, -1.1], geo: () => new THREE.BoxGeometry(0.35, 0.35, 0.35), color: colors.primary, op: 0.28 },
    { pos: [-0.2, -1.75, -0.9], geo: () => new THREE.DodecahedronGeometry(0.28, 0), color: colors.mid, op: 0.3 },
    { pos: [3.15, 0.15, -1.4], geo: () => new THREE.OctahedronGeometry(0.32, 0), color: colors.soft, op: 0.26 },
    { pos: [-3.2, 0.05, -1.35], geo: () => new THREE.IcosahedronGeometry(0.3, 0), color: colors.primary, op: 0.26 },
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
    fov: 42,
    z: 5.85,
    pointer: 0.22,
    onFrame: ({ t, target }) => {
      world.rotation.y = target.x * 0.32;
      world.rotation.x = target.y * 0.22;

      systems.group.position.x = 2.2;
      systems.group.position.z = -0.35;
      care.group.position.x = -2.3;
      care.group.position.z = 0.15;
      signal.group.position.x = -2.0;
      signal.group.position.z = -0.5;
      process.group.position.x = 2.05;
      process.group.position.z = -0.25;

      systems.tick(t);
      systems.group.position.y = 1.05 + Math.sin(t * 0.7) * 0.08;
      care.tick(t);
      care.group.position.y = -0.9 + Math.cos(t * 0.55) * 0.07;
      signal.tick(t);
      signal.group.position.y = 1.25 + Math.sin(t * 0.6 + 1) * 0.09;
      process.tick(t);
      process.group.position.y = -1.1 + Math.cos(t * 0.65 + 0.5) * 0.08;

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

  world.add(systems.group, care.group, signal.group, process.group);

  extras.ribbon = makeOrbitRibbon(world, colors.primary, 0.18);
  extras.ribbon2 = makeOrbitRibbon(world, colors.soft, 0.1);
  extras.ribbon2.rotation.z = Math.PI / 2.4;
  extras.ribbon2.scale.setScalar(0.78);

  extras.halo = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.004, 8, 120),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.16 }),
  );
  extras.halo.rotation.x = Math.PI / 2.8;
  world.add(extras.halo);
  extras.halo2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.15, 0.003, 8, 140),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.1 }),
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

  extras.dust = makeParticles(world, 160, colors.primary, 5.8, 0.018, 0.32);
  extras.dust2 = makeParticles(world, 70, colors.soft, 6.4, 0.013, 0.22);
  extras.dustNear = makeParticles(world, 40, colors.mid, 3.6, 0.02, 0.18);

  return dispose;
}

/* —— GLTF vehicles (Kenney Car Kit, CC0) + medical props —— */

const VEHICLE_URLS = {
  ambulance: "/models/ambulance.glb",
  race: "/models/race.glb",
  sedan: "/models/sedan-sports.glb",
  hatchback: "/models/hatchback-sports.glb",
};

const gltfCache = new Map();
const gltfLoader = new GLTFLoader();

async function loadVehicle(name) {
  const url = VEHICLE_URLS[name];
  if (!url) return null;
  try {
    if (!gltfCache.has(url)) {
      const gltf = await gltfLoader.loadAsync(url);
      gltfCache.set(url, gltf.scene);
    }
    const root = gltfCache.get(url).clone(true);
    root.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            m.transparent = false;
            m.depthWrite = true;
          });
        }
      }
    });
    return root;
  } catch {
    return null;
  }
}

/** Procedural pharmacy / care props — capsule, cross, vial */
function buildMedicalProps(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);

  const capsule = lineObj(group, new THREE.CapsuleGeometry(0.22, 0.55, 6, 12), colors.mid, 0.55);
  capsule.rotation.z = Math.PI / 7;
  capsule.position.set(-0.35, 0.1, 0);

  const cross = new THREE.Group();
  const barH = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.12, 0.12),
    new THREE.MeshBasicMaterial({ color: colors.soft, transparent: true, opacity: 0.75 }),
  );
  const barV = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.55, 0.12),
    new THREE.MeshBasicMaterial({ color: colors.soft, transparent: true, opacity: 0.75 }),
  );
  cross.add(barH, barV);
  cross.position.set(0.45, 0.15, 0.1);
  group.add(cross);

  const vial = lineObj(group, new THREE.CylinderGeometry(0.12, 0.12, 0.42, 12), colors.primary, 0.4);
  vial.position.set(0.05, -0.35, -0.15);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.85, 0.006, 8, 80),
    new THREE.MeshBasicMaterial({ color: colors.mid, transparent: true, opacity: 0.28 }),
  );
  ring.rotation.x = Math.PI / 2.3;
  group.add(ring);

  return {
    group,
    tick(t) {
      group.rotation.y = t * 0.3;
      capsule.rotation.y = t * 0.4;
      cross.rotation.z = Math.sin(t * 0.7) * 0.15;
      vial.rotation.y = -t * 0.5;
      ring.rotation.z = t * 0.2;
      group.position.y += 0;
    },
  };
}

/**
 * Showcase a Kenney vehicle (ambulance / race / sedan / hatchback).
 */
export function initVehicleScene(
  container,
  { model = "ambulance", tone = "forest", compact = false, desktopOnly = true } = {},
) {
  if (!container || prefersReduced()) return () => {};
  if (desktopOnly && isNarrow()) return () => {};

  const colors = palette(tone);
  const medical = model === "ambulance" ? buildMedicalProps(colors, compact ? 0.7 : 0.85) : null;
  const state = { vehicle: null };
  const extras = { dust: null, ring: null };

  const { dispose, world } = runScene(container, {
    fov: compact ? 34 : 36,
    z: compact ? 3.8 : 4.4,
    pointer: 0.3,
    onFrame: ({ t, target }) => {
      world.rotation.y = target.x * 0.85;
      world.rotation.x = 0.18 + target.y * 0.55;
      if (state.vehicle) {
        state.vehicle.rotation.y = t * 0.35;
        state.vehicle.position.y = Math.sin(t * 0.6) * 0.06;
      }
      if (medical) medical.tick(t * 0.8);
      if (extras.dust) extras.dust.rotation.y = t * 0.04;
      if (extras.ring) extras.ring.rotation.z = t * 0.15;
    },
  });

  extras.dust = makeParticles(world, compact ? 30 : 50, colors.soft, 2.1, 0.012, 0.3);
  extras.ring = new THREE.Mesh(
    new THREE.TorusGeometry(compact ? 1.3 : 1.55, 0.005, 8, 100),
    new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.2 }),
  );
  extras.ring.rotation.x = Math.PI / 2.5;
  world.add(extras.ring);
  if (medical) {
    medical.group.position.set(compact ? -0.95 : -1.15, 0.55, -0.3);
    medical.group.scale.multiplyScalar(0.85);
    world.add(medical.group);
  }

  let cancelled = false;
  (async () => {
    const vehicle = await loadVehicle(model);
    if (cancelled || !vehicle) return;
    vehicle.scale.setScalar(compact ? 1.15 : 1.35);
    vehicle.rotation.x = 0.18;
    world.add(vehicle);
    state.vehicle = vehicle;
  })();

  const wrapped = () => {
    cancelled = true;
    dispose();
  };
  wrapped.setPaused = dispose.setPaused;
  return wrapped;
}

/**
 * Dual vehicle pad — sports car + ambulance for building / projects.
 */
export function initGarageScene(container, { tone = "forest", compact = false } = {}) {
  if (!container || prefersReduced()) return () => {};
  if (!compact && isNarrow()) return () => {};

  const colors = palette(tone);
  const state = { race: null, sedan: null };
  const extras = { dust: null };

  const { dispose, world } = runScene(container, {
    fov: 36,
    z: compact ? 4.2 : 4.8,
    pointer: 0.25,
    onFrame: ({ t, target }) => {
      world.rotation.y = target.x * 0.55;
      world.rotation.x = 0.12 + target.y * 0.4;
      if (state.race) {
        state.race.rotation.y = t * 0.32;
        state.race.position.y = 0.1 + Math.sin(t * 0.55) * 0.05;
      }
      if (state.sedan) {
        state.sedan.rotation.y = -t * 0.28 + 0.8;
        state.sedan.position.y = -0.35 + Math.cos(t * 0.5) * 0.05;
      }
      if (extras.dust) extras.dust.rotation.y = t * 0.04;
    },
  });

  extras.dust = makeParticles(world, 40, colors.soft, 2.4, 0.012, 0.28);
  let cancelled = false;
  (async () => {
    const [race, sedan] = await Promise.all([loadVehicle("race"), loadVehicle("sedan")]);
    if (cancelled) return;
    if (race) {
      race.scale.setScalar(1.05);
      race.position.set(0.55, 0.1, 0.1);
      race.rotation.x = 0.2;
      world.add(race);
      state.race = race;
    }
    if (sedan) {
      sedan.scale.setScalar(0.95);
      sedan.position.set(-0.75, -0.35, -0.35);
      sedan.rotation.set(0.15, 1.0, 0);
      world.add(sedan);
      state.sedan = sedan;
    }
  })();

  const wrapped = () => {
    cancelled = true;
    dispose();
  };
  wrapped.setPaused = dispose.setPaused;
  return wrapped;
}
