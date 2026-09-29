import * as THREE from "three";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNarrow() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function makeRenderer(container) {
  try {
    const canvas = document.createElement("canvas");
    const probe =
      canvas.getContext("webgl2", { alpha: true }) ||
      canvas.getContext("webgl", { alpha: true }) ||
      canvas.getContext("experimental-webgl", { alpha: true });
    if (!probe) return null;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      canvas,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      width: "100%",
      height: "100%",
      display: "block",
    });
    return renderer;
  } catch {
    return null;
  }
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
      group.rotation.y = t * 0.32;
      group.rotation.x = Math.sin(t * 0.42) * 0.12;
      shell.rotation.z = t * 0.12;
      core.rotation.y = -t * 0.62;
      inner.rotation.x = t * 0.68;
      ring.rotation.z = t * 0.22;
      ring2.rotation.z = -t * 0.16;
      group.position.y = baseY + Math.sin(t * 0.7) * 0.05;
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
      capsule.rotation.y = t * 0.45;
      shell.rotation.y = t * 0.16;
      ring.rotation.z = t * 0.34;
      nodes.forEach((n) => {
        const a = t * 0.62 + n.phase;
        n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a * 1.2) * 0.22, Math.sin(a) * n.r);
      });
      group.position.y = baseY + Math.cos(t * 0.58) * 0.05;
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
      group.rotation.y = t * 0.4;
      group.rotation.z = Math.sin(t * 0.5) * 0.15;
      tet.rotation.x = t * 0.28;
      tet2.rotation.y = -t * 0.48;
      tet3.rotation.z = t * 0.62;
      ring.rotation.z = t * 0.3;
      nodes.forEach((n) => {
        const a = -t * 0.7 + n.phase;
        n.mesh.position.set(Math.cos(a) * n.r, Math.sin(a) * 0.32, Math.sin(a) * n.r * 0.6);
      });
      group.position.y = baseY + Math.sin(t * 0.62 + 1) * 0.06;
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
      group.rotation.x = t * 0.3;
      group.rotation.y = t * 0.22;
      knot.rotation.z = t * 0.38;
      soft.rotation.x = -t * 0.3;
      ring.rotation.z = -t * 0.28;
      group.position.y = baseY + Math.cos(t * 0.68 + 0.5) * 0.055;
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

/** Wireframe rocket — intro launch + hero orbit. */
function buildRocket(colors, scale = 1) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);

  const body = lineObj(group, new THREE.CylinderGeometry(0.22, 0.28, 1.15, 12), colors.primary, 0.55);
  body.position.y = 0.1;

  const nose = lineObj(group, new THREE.ConeGeometry(0.22, 0.42, 12), colors.soft, 0.6);
  nose.position.y = 0.88;

  const collar = lineObj(group, new THREE.TorusGeometry(0.24, 0.02, 6, 24), colors.mid, 0.45);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 0.55;

  const window = lineObj(group, new THREE.TorusGeometry(0.09, 0.018, 6, 20), colors.soft, 0.55);
  window.position.set(0, 0.28, 0.22);

  const fins = [];
  for (let i = 0; i < 3; i++) {
    const fin = lineObj(group, new THREE.ConeGeometry(0.14, 0.38, 4), colors.mid, 0.5);
    const a = (i / 3) * Math.PI * 2;
    fin.position.set(Math.cos(a) * 0.32, -0.42, Math.sin(a) * 0.32);
    fin.rotation.z = Math.cos(a) * 0.55;
    fin.rotation.x = Math.sin(a) * 0.55;
    fins.push(fin);
  }

  const nozzle = lineObj(group, new THREE.CylinderGeometry(0.16, 0.22, 0.18, 10), colors.primary, 0.4);
  nozzle.position.y = -0.58;

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.14, 0.45, 8),
    new THREE.MeshBasicMaterial({
      color: colors.soft,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    }),
  );
  flame.rotation.x = Math.PI;
  flame.position.y = -0.92;
  group.add(flame);

  return {
    group,
    tick(t, thrust = 1) {
      group.rotation.y = t * 0.55;
      fins.forEach((f, i) => {
        f.rotation.y = t * 0.4 + i;
      });
      flame.scale.setScalar(0.75 + Math.sin(t * 14) * 0.28 * thrust);
      flame.material.opacity = 0.22 + Math.sin(t * 11) * 0.14 * thrust;
    },
  };
}

/** Wireframe locomotive — kept for compatibility. */
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
  rocket: buildRocket,
};

/**
 * Shared scene runner. Returns dispose. Controllers can call setPaused.
 */
function runScene(container, { fov = 38, z = 4.2, pointer = 0.25, onFrame }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
  camera.position.z = z;
  const renderer = makeRenderer(container);
  if (!renderer) {
    return {
      dispose: () => {},
      world: new THREE.Group(),
      scene,
      camera,
      renderer: null,
    };
  }
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
    t += 0.008;
    target.x += (mouse.x - target.x) * 0.035;
    target.y += (mouse.y - target.y) * 0.035;
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
 * @param {"systems"|"care"|"signal"|"process"|"rocket"|"planet"} motif
 * @param {"cream"|"forest"} tone
 */
export function initMotifScene(
  container,
  { motif = "systems", tone = "cream", compact = false, desktopOnly = true } = {},
) {
  if (!container || prefersReduced()) return () => {};
  if (desktopOnly && isNarrow()) return () => {};

  try {
    const colors = palette(tone);
    const builder = MOTIF_BUILDERS[motif] || buildSystems;
    const piece = builder(colors, compact ? 0.85 : 1);
    const dustCount = compact ? 36 : 64;
    const extras = { dust: null, ring: null };

    const { dispose, world, renderer } = runScene(container, {
      fov: compact ? 36 : 38,
      z: compact ? 3.5 : 4.1,
      pointer: 0.18,
      onFrame: ({ t, target, world: w }) => {
        w.rotation.y = target.x * 0.28;
        w.rotation.x = 0.06 + target.y * 0.18;
        piece.tick(t);
        if (extras.dust) extras.dust.rotation.y = t * 0.08;
        if (extras.ring) extras.ring.rotation.z = t * 0.18;
      },
    });

    if (!renderer || !world) return dispose || (() => {});

    world.add(piece.group);
    extras.dust = makeParticles(world, dustCount, colors.soft, compact ? 1.7 : 2.2, 0.014, 0.38);
    extras.ring = new THREE.Mesh(
      new THREE.TorusGeometry(compact ? 1.35 : 1.55, 0.004, 8, 100),
      new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.2 }),
    );
    extras.ring.rotation.x = Math.PI / 2.6;
    world.add(extras.ring);

    return dispose;
  } catch {
    return () => {};
  }
}

/**
 * Hero — systems lattice + orbiting rocket + dust field.
 */
export function initHeroScene(container) {
  if (!container || prefersReduced()) return () => {};
  if (isNarrow()) return () => {};

  try {
    const colors = palette("forest");
    const systems = buildSystems(colors, 1.12);
    const rocket = buildRocket(colors, 0.42);
    const signal = buildSignal(colors, 0.38);

    systems.group.position.set(1.45, 0.05, -0.15);
    signal.group.position.set(-1.55, -0.55, -0.8);

    const extras = { dust: null, dust2: null, ribbon: null };

    const { dispose, world, renderer } = runScene(container, {
      fov: 36,
      z: 5.0,
      pointer: 0.22,
      onFrame: ({ t, target, world: w }) => {
        w.rotation.y = target.x * 0.22;
        w.rotation.x = target.y * 0.14;
        systems.tick(t * 0.78);
        systems.group.position.y = 0.08 + Math.sin(t * 0.5) * 0.045;
        signal.tick(t * 0.9);
        signal.group.rotation.y = t * 0.35;

        const a = t * 0.55;
        rocket.group.position.set(
          Math.cos(a) * 2.15 + 0.35,
          Math.sin(a * 1.15) * 0.85 + 0.15,
          Math.sin(a) * 0.9 - 0.4,
        );
        rocket.group.rotation.z = -0.9 + Math.sin(a) * 0.25;
        rocket.group.rotation.x = 0.35;
        rocket.tick(t * 1.4, 1.1);

        if (extras.dust) extras.dust.rotation.y = t * 0.06;
        if (extras.dust2) extras.dust2.rotation.y = -t * 0.04;
        if (extras.ribbon) extras.ribbon.rotation.y = t * 0.05;
      },
    });

    if (!renderer || !world) return dispose || (() => {});

    world.add(systems.group, rocket.group, signal.group);
    extras.dust = makeParticles(world, 56, colors.primary, 3.8, 0.012, 0.22);
    extras.dust2 = makeParticles(world, 28, colors.soft, 4.4, 0.009, 0.14);
    extras.ribbon = makeOrbitRibbon(world, colors.mid, 0.14);

    return dispose;
  } catch {
    return () => {};
  }
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
 * Intro loader — rocket launch + spinning flybys.
 */
export function initIntroScene(container) {
  if (!container || prefersReduced()) return () => {};

  try {
    const colors = palette("cream");
    const rocket = buildRocket(colors, 1.15);

    const flyers = [];
    const flyerSpecs = [
      { geo: () => new THREE.IcosahedronGeometry(0.22, 0), color: colors.primary, y: 1.35, z: -0.8, speed: 1.25, phase: 0.0, spin: 1.1 },
      { geo: () => new THREE.OctahedronGeometry(0.2, 0), color: colors.soft, y: 0.85, z: -1.1, speed: 1.0, phase: 1.2, spin: 1.3 },
      { geo: () => new THREE.BoxGeometry(0.28, 0.28, 0.28), color: colors.mid, y: -0.95, z: -0.6, speed: 1.15, phase: 2.1, spin: 0.85 },
      { geo: () => new THREE.TetrahedronGeometry(0.24, 0), color: colors.primary, y: -1.35, z: -1.0, speed: 0.9, phase: 0.55, spin: 1.45 },
      { geo: () => new THREE.DodecahedronGeometry(0.18, 0), color: colors.soft, y: 1.75, z: -1.4, speed: 1.35, phase: 2.8, spin: 1.0 },
      { geo: () => new THREE.CapsuleGeometry(0.1, 0.22, 4, 8), color: colors.mid, y: -0.35, z: -1.3, speed: 1.05, phase: 1.7, spin: 1.15 },
    ];

    const extras = { dust: null, dust2: null };
    const tripSec = 2.05;
    const startedAt = performance.now();

    const { dispose, world, renderer } = runScene(container, {
      fov: 42,
      z: 7.0,
      pointer: 0.16,
      onFrame: ({ t, target, world: w }) => {
        w.rotation.y = target.x * 0.14;
        w.rotation.x = target.y * 0.1;

        const elapsed = (performance.now() - startedAt) / 1000;
        const u = Math.min(1, Math.max(0, elapsed / tripSec));
        const ease = u * u * (3 - 2 * u);

        /* Diagonal launch: bottom-left → upper-right */
        rocket.group.position.x = -4.2 + ease * 8.6;
        rocket.group.position.y = -2.4 + ease * 5.2;
        rocket.group.position.z = 0.3;
        rocket.group.rotation.z = -0.95 + ease * 0.35;
        rocket.group.rotation.x = 0.25;
        rocket.tick(t * 1.6, 1.2 + ease);

        flyers.forEach((f) => {
          const local = (elapsed * f.speed * 0.42 + f.phase) % 1.0;
          f.group.position.x = 5.0 - local * 10.2;
          f.group.position.y = f.baseY + Math.sin(t * 1.1 + f.phase) * 0.16;
          f.group.position.z = f.baseZ;
          f.group.rotation.x = t * f.spin;
          f.group.rotation.y = t * f.spin * 0.75;
        });

        if (extras.dust) extras.dust.rotation.y = t * 0.06;
        if (extras.dust2) extras.dust2.rotation.y = -t * 0.045;
      },
    });

    if (!renderer || !world) return dispose || (() => {});

    world.add(rocket.group);

    flyerSpecs.forEach((spec) => {
      const g = new THREE.Group();
      lineObj(g, spec.geo(), spec.color, 0.45);
      world.add(g);
      flyers.push({
        group: g,
        baseY: spec.y,
        baseZ: spec.z,
        speed: spec.speed,
        phase: spec.phase,
        spin: spec.spin,
      });
    });

    extras.dust = makeParticles(world, 110, colors.primary, 6.4, 0.015, 0.26);
    extras.dust2 = makeParticles(world, 50, colors.soft, 7.2, 0.011, 0.16);

    return dispose;
  } catch {
    return () => {};
  }
}

/** @deprecated Page marker now uses SVG logo — kept for API compatibility */
export function initPlanetScene(container) {
  if (!container || prefersReduced()) return () => {};
  return () => {};
}
