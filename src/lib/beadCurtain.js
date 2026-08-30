/**
 * Verlet hanging-bead curtain.
 * Independent strands (beaded doorway), mouse push, optional center-part.
 */
export function createBeadCurtain(THREE, opts = {}) {
  const narrow =
    typeof window !== "undefined" && window.matchMedia("(max-width: 700px)").matches;

  const {
    cols = narrow ? 16 : opts.mode === "intro" ? 36 : 34,
    rows = narrow ? 14 : opts.mode === "intro" ? 26 : 22,
    spacingX = opts.mode === "intro" ? 0.22 : 0.145,
    spacingY = opts.mode === "intro" ? 0.175 : 0.13,
    beadRadius = opts.mode === "intro" ? 0.048 : 0.062,
    gravity = 0.0032,
    damping = 0.972,
    mouseRadius = opts.mode === "hero" ? 1.45 : 0.92,
    mouseStrength = opts.mode === "hero" ? 0.16 : 0.085,
    partSpread = 2.15,
    xOffset = opts.mode === "hero" ? 0.2 : 0,
    yTop = opts.mode === "hero" ? 1.52 : 2.15,
    zJitter = 0.22,
    tone = "forest",
    mode = "hero",
  } = opts;

  const palette =
    tone === "cream"
      ? [0x002800, 0x0d6b48, 0x0a3318, 0xc8e86a, 0x0f3a20]
      : [0xf7e9dc, 0xc8e86a, 0xefe0cf, 0x34d399, 0xfbf4ea];

  const group = new THREE.Group();
  const dummy = new THREE.Object3D();

  const strands = [];
  const restLen = spacingY;
  const width = (cols - 1) * spacingX;

  for (let i = 0; i < cols; i++) {
    const len = rows - ((i * 17) % 4 === 0 ? 2 : (i * 5) % 3 === 0 ? 1 : 0);
    const restX = -width / 2 + i * spacingX + xOffset;
    const restZ = Math.sin(i * 0.73) * zJitter;
    const beads = [];
    for (let j = 0; j < len; j++) {
      beads.push({
        x: restX + (Math.random() - 0.5) * 0.01,
        y: yTop - j * spacingY,
        z: restZ + (Math.random() - 0.5) * 0.02,
        ox: restX,
        oy: yTop - j * spacingY,
        oz: restZ,
        restX,
        restY: yTop - j * spacingY,
        restZ,
        pinned: j === 0,
        scale: 0.78 + ((i + j * 3) % 5) * 0.07 + (j === len - 1 ? 0.18 : 0),
        colorIndex: (i * 3 + j * 2 + (j === len - 1 ? 1 : 0)) % palette.length,
      });
    }
    strands.push({ beads, side: i < cols / 2 ? -1 : 1, phase: i * 0.37 });
  }

  const geo = new THREE.SphereGeometry(beadRadius, 12, 10);
  const opacity = tone === "cream" ? 0.88 : 0.94;
  const buckets = palette.map(() => []);
  strands.forEach((s) => {
    s.beads.forEach((b) => buckets[b.colorIndex].push(b));
  });
  const meshes = [];
  const materials = [];
  buckets.forEach((beads, ci) => {
    if (!beads.length) return;
    const mat = new THREE.MeshBasicMaterial({
      color: palette[ci],
      transparent: true,
      opacity,
      depthWrite: false,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, beads.length);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    beads.forEach((b, i) => {
      b.mesh = mesh;
      b.instance = i;
    });
    group.add(mesh);
    meshes.push(mesh);
    materials.push(mat);
  });

  const threadCount = strands.reduce((n, s) => n + Math.max(0, s.beads.length - 1), 0);
  const threadPos = new Float32Array(threadCount * 2 * 3);
  const threadGeo = new THREE.BufferGeometry();
  threadGeo.setAttribute("position", new THREE.BufferAttribute(threadPos, 3));
  const threadMat = new THREE.LineBasicMaterial({
    color: tone === "cream" ? 0x0d6b48 : 0xc8e86a,
    transparent: true,
    opacity: tone === "cream" ? 0.22 : 0.28,
    depthWrite: false,
  });
  const threads = new THREE.LineSegments(threadGeo, threadMat);
  threads.frustumCulled = false;
  group.add(threads);

  const mouse = { x: 0, y: 0, active: false };
  const ndc = { x: 0, y: 0 };

  const onMove = (e) => {
    const el = opts.container;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX ?? e.touches?.[0]?.clientX;
    const cy = e.clientY ?? e.touches?.[0]?.clientY;
    if (cx == null || cy == null) return;
    ndc.x = ((cx - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
    ndc.y = -(((cy - rect.top) / Math.max(rect.height, 1)) * 2 - 1);
    mouse.active = true;
  };
  const onLeave = () => {
    mouse.active = false;
  };

  if (typeof window !== "undefined") {
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
  }

  const tmp = new THREE.Vector3();
  const origin = new THREE.Vector3();
  const dir = new THREE.Vector3();

  function projectMouse(camera) {
    if (!camera) return;
    tmp.set(ndc.x, ndc.y, 0.5).unproject(camera);
    origin.copy(camera.position);
    dir.copy(tmp).sub(origin).normalize();
    const dist = (0 - origin.z) / (dir.z || 0.0001);
    mouse.x = origin.x + dir.x * dist;
    mouse.y = origin.y + dir.y * dist;
  }

  function tick({ camera, part = 0, t = 0 }) {
    projectMouse(camera);

    const wind = mode === "intro" ? 0.05 : 0.04;
    const spread = part * partSpread;

    for (let s = 0; s < strands.length; s++) {
      const strand = strands[s];
      const beads = strand.beads;
      const pinShift = strand.side * spread;
      const sway = Math.sin(t * 1.05 + strand.phase) * wind;

      for (let j = 0; j < beads.length; j++) {
        const p = beads[j];
        const hangX = p.restX + pinShift + sway * (1 + j * 0.12);
        const hangY = p.restY;
        const hangZ = p.restZ + Math.sin(t * 0.7 + strand.phase) * 0.03;

        let pushX = 0;
        let pushY = 0;
        if (mouse.active) {
          const dx = hangX - mouse.x;
          const dy = hangY - mouse.y;
          const d2 = dx * dx + dy * dy;
          const r2 = mouseRadius * mouseRadius;
          if (d2 < r2 && d2 > 0.0002) {
            const d = Math.sqrt(d2);
            const f = (1 - d / mouseRadius) * mouseStrength * (8 + j * 0.35);
            pushX = (dx / d) * f;
            pushY = (dy / d) * f * 0.55;
          }
        }

        const targetX = hangX + pushX + strand.side * part * j * 0.04;
        const targetY = hangY + pushY;
        const targetZ = hangZ;
        const ease = p.pinned ? 1 : 0.28;
        p.x += (targetX - p.x) * ease;
        p.y += (targetY - p.y) * ease;
        p.z += (targetZ - p.z) * ease;
      }
    }

    let ti = 0;
    for (let s = 0; s < strands.length; s++) {
      const beads = strands[s].beads;
      for (let j = 0; j < beads.length; j++) {
        const p = beads[j];
        dummy.position.set(p.x, p.y, p.z);
        dummy.scale.setScalar(p.scale);
        dummy.updateMatrix();
        p.mesh.setMatrixAt(p.instance, dummy.matrix);
        if (j > 0) {
          const a = beads[j - 1];
          threadPos[ti++] = a.x;
          threadPos[ti++] = a.y;
          threadPos[ti++] = a.z;
          threadPos[ti++] = p.x;
          threadPos[ti++] = p.y;
          threadPos[ti++] = p.z;
        }
      }
    }
    meshes.forEach((m) => {
      m.instanceMatrix.needsUpdate = true;
    });
    threadGeo.attributes.position.needsUpdate = true;
  }

  function dispose() {
    if (typeof window !== "undefined") {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    }
    geo.dispose();
    materials.forEach((m) => m.dispose());
    meshes.forEach((m) => {
      if (m.parent) m.parent.remove(m);
    });
    threadGeo.dispose();
    threadMat.dispose();
    if (threads.parent) threads.parent.remove(threads);
  }

  return { group, tick, dispose };
}
