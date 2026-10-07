import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const ACCENTS = {
  violet: new THREE.Color("#b48cff"),
  ice: new THREE.Color("#9fd4ff"),
  verdant: new THREE.Color("#7dffb2"),
  amber: new THREE.Color("#ffc56e"),
  cyan: new THREE.Color("#7ed0ef"),
  steel: new THREE.Color("#c5d4e8"),
};

const SIZE_R = { lg: 1.15, md: 0.72, sm: 0.52 };

function pctToWorld(x, y, z = 0) {
  return new THREE.Vector3(((x - 50) / 50) * 9.2, -((y - 46) / 50) * 5.4, z);
}

function makePlanetTexture(accentKey, seed = 1) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext("2d");
  const base = {
    violet: ["#1a0a30", "#4b1f8a", "#c9a0ff", "#5ad0ff"],
    ice: ["#0a1a2e", "#1c4a72", "#b7e4ff", "#e8f6ff"],
    verdant: ["#06180e", "#145232", "#8dffb8", "#d4ff88"],
    amber: ["#221208", "#6a3a10", "#ffc56e", "#ffe0a8"],
    cyan: ["#061820", "#0e4a5a", "#7ed0ef", "#d8f6ff"],
    steel: ["#101418", "#3a4654", "#c5d4e8", "#f0f4f8"],
  }[accentKey] || ["#0a1220", "#1a3050", "#7ed0ef", "#ffffff"];

  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, base[0]);
  g.addColorStop(0.45, base[1]);
  g.addColorStop(1, base[0]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 256);

  for (let i = 0; i < 1400; i++) {
    const x = ((i * 97 + seed * 13) % 512) + Math.sin(i * 0.7 + seed) * 8;
    const y = ((i * 53 + seed * 29) % 256) + Math.cos(i * 0.4) * 6;
    const a = 0.08 + ((i * 17) % 40) / 200;
    ctx.fillStyle =
      i % 5 === 0
        ? `rgba(255,255,255,${a * 0.55})`
        : i % 3 === 0
          ? `${base[2]}${Math.floor(a * 255)
              .toString(16)
              .padStart(2, "0")}`
          : `${base[1]}aa`;
    ctx.beginPath();
    ctx.ellipse(x, y, 2 + (i % 7), 1 + (i % 4), (i % 20) / 10, 0, Math.PI * 2);
    ctx.fill();
  }

  // Banding / storms
  for (let b = 0; b < 8; b++) {
    const y = 24 + b * 30 + (seed % 5) * 3;
    ctx.strokeStyle = `${base[2]}66`;
    ctx.lineWidth = 2 + (b % 4);
    ctx.beginPath();
    for (let x = 0; x < 512; x += 3) {
      const yy = y + Math.sin(x * 0.035 + seed + b) * (7 + b * 0.8);
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  // Continent / ice crust blotches
  for (let i = 0; i < 48; i++) {
    const x = (i * 71 + seed * 19) % 512;
    const y = 20 + ((i * 43 + seed * 7) % 216);
    const rg = ctx.createRadialGradient(x, y, 0, x, y, 18 + (i % 20));
    rg.addColorStop(0, `${base[3]}88`);
    rg.addColorStop(0.55, `${base[2]}33`);
    rg.addColorStop(1, "transparent");
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.ellipse(x, y, 22 + (i % 16), 10 + (i % 10), (i % 12) / 8, 0, Math.PI * 2);
    ctx.fill();
  }

  // Specular city lights / ice sparkle strip
  for (let i = 0; i < 120; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.15 + (i % 5) * 0.08})`;
    ctx.fillRect((i * 37 + seed * 3) % 512, 80 + ((i * 19) % 100), 1.5, 1.5);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

function planetShaderMaterial(texture, accent, featured) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: texture },
      uAccent: { value: accent.clone() },
      uTime: { value: 0 },
      uLightDir: { value: new THREE.Vector3(0.55, 0.35, 0.75).normalize() },
      uFeatured: { value: featured ? 1 : 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform sampler2D uMap;
      uniform vec3 uAccent;
      uniform float uTime;
      uniform vec3 uLightDir;
      uniform float uFeatured;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      void main() {
        vec2 uv = vUv + vec2(uTime * 0.022, sin(uTime * 0.1) * 0.002);
        vec3 albedo = texture2D(uMap, uv).rgb;
        vec3 n = normalize(vNormal);
        float ndl = max(dot(n, uLightDir), 0.0);
        float wrap = ndl * 0.75 + 0.25;
        float rim = pow(1.0 - max(dot(n, vec3(0.0,0.15,0.98)), 0.0), 2.8);
        float night = pow(1.0 - ndl, 2.0);
        vec3 col = albedo * (0.18 + wrap * 1.05);
        col += uAccent * rim * (0.7 + uFeatured * 0.65);
        col += uAccent * pow(ndl, 10.0) * 0.35;
        col += albedo * night * 0.12;
        if (uFeatured > 0.5) {
          float swirl = sin(vUv.x * 34.0 + uTime * 2.6 + vUv.y * 12.0) * 0.5 + 0.5;
          float pulse = 0.55 + 0.45 * sin(uTime * 3.0);
          col = mix(col, uAccent * 1.45, swirl * rim * 0.62 * pulse);
          col += vec3(0.4, 0.55, 1.0) * rim * 0.45;
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
}

function atmosphereMaterial(accent) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uAccent: { value: accent.clone() },
      uIntensity: { value: 1 },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uAccent;
      uniform float uIntensity;
      varying vec3 vNormal;
      void main() {
        float fres = pow(0.72 - dot(vNormal, vec3(0.0,0.0,1.0)), 2.8);
        fres = clamp(fres, 0.0, 1.0);
        gl_FragColor = vec4(uAccent * 1.2, fres * 0.85 * uIntensity);
      }
    `,
  });
}

function makeRenderer(container) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, {
    width: "100%",
    height: "100%",
    display: "block",
  });
  return renderer;
}

/**
 * Destiny Director–style 3D scene:
 * textured rotating destinations, atmosphere rims, bloom, orbital rings,
 * earth horizon, starfield, and travel/warp camera sequence.
 */
export function initDirectorScene(container, destinations, handlers = {}) {
  if (!container) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = makeRenderer(container);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
  camera.position.set(0, 0.15, 14.5);

  const root = new THREE.Group();
  scene.add(root);

  // Nebula wash
  const nebulaGeo = new THREE.PlaneGeometry(40, 24);
  const nebulaMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec2 vUv;
      float n(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      void main() {
        vec2 uv = vUv + uPointer * 0.02;
        float d = distance(uv, vec2(0.52, 0.46));
        float a = smoothstep(0.62, 0.08, d);
        vec3 c1 = vec3(0.18, 0.08, 0.38);
        vec3 c2 = vec3(0.05, 0.18, 0.38);
        vec3 c3 = vec3(0.02, 0.08, 0.18);
        float w = 0.5 + 0.5 * sin(uTime * 0.15 + uv.x * 4.0);
        vec3 col = mix(c3, mix(c1, c2, w), a);
        float speck = step(0.997, n(uv * 420.0 + uTime * 0.01));
        col += speck * 0.55;
        gl_FragColor = vec4(col, 0.92);
      }
    `,
  });
  const nebula = new THREE.Mesh(nebulaGeo, nebulaMat);
  nebula.position.z = -18;
  root.add(nebula);

  // Stars
  const starCount = reduced ? 500 : 1800;
  const starPos = new Float32Array(starCount * 3);
  const starVel = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 48;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 28;
    starPos[i * 3 + 2] = -4 - Math.random() * 30;
    starVel[i] = 0.4 + Math.random() * 1.6;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xdce9ff,
    size: 0.045,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const stars = new THREE.Points(starGeo, starMat);
  root.add(stars);

  // Warp streak lines (hidden until travel)
  const streakCount = reduced ? 80 : 220;
  const streakPos = new Float32Array(streakCount * 6);
  for (let i = 0; i < streakCount; i++) {
    const x = (Math.random() - 0.5) * 16;
    const y = (Math.random() - 0.5) * 10;
    const z = -2 - Math.random() * 20;
    streakPos[i * 6] = x;
    streakPos[i * 6 + 1] = y;
    streakPos[i * 6 + 2] = z;
    streakPos[i * 6 + 3] = x;
    streakPos[i * 6 + 4] = y;
    streakPos[i * 6 + 5] = z - 0.01;
  }
  const streakGeo = new THREE.BufferGeometry();
  streakGeo.setAttribute("position", new THREE.BufferAttribute(streakPos, 3));
  const streakMat = new THREE.LineBasicMaterial({
    color: 0xb8ecff,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const streaks = new THREE.LineSegments(streakGeo, streakMat);
  root.add(streaks);

  // Orbital rings
  const ringGroup = new THREE.Group();
  ringGroup.position.set(0, 0.1, -1.2);
  [2.2, 4.2, 6.4, 8.6].forEach((r, i) => {
    const pts = [];
    const seg = 128;
    for (let s = 0; s <= seg; s++) {
      const a = (s / seg) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.62, 0));
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const m = new THREE.LineBasicMaterial({
      color: i === 1 ? 0xb48cff : 0x8eb6e8,
      transparent: true,
      opacity: 0.16 + i * 0.03,
    });
    ringGroup.add(new THREE.Line(g, m));
  });
  // Radial spokes
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const g = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.cos(a) * 9, Math.sin(a) * 5.5, 0),
    ]);
    ringGroup.add(
      new THREE.Line(
        g,
        new THREE.LineBasicMaterial({ color: 0x7ea0c8, transparent: true, opacity: 0.08 }),
      ),
    );
  }
  root.add(ringGroup);

  // Earth horizon
  const earthGeo = new THREE.SphereGeometry(18, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.42);
  const earthMat = new THREE.MeshStandardMaterial({
    color: 0x143a5c,
    emissive: 0x0a2038,
    emissiveIntensity: 0.55,
    roughness: 0.85,
    metalness: 0.15,
  });
  const earth = new THREE.Mesh(earthGeo, earthMat);
  earth.position.set(0, -20.2, -2);
  earth.rotation.x = Math.PI;
  root.add(earth);
  const earthRim = new THREE.Mesh(
    new THREE.SphereGeometry(18.12, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.42),
    new THREE.MeshBasicMaterial({
      color: 0x7ed0ef,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    }),
  );
  earthRim.position.copy(earth.position);
  earthRim.rotation.copy(earth.rotation);
  root.add(earthRim);

  scene.add(new THREE.AmbientLight(0x6a88b8, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.35);
  key.position.set(4, 5, 8);
  scene.add(key);
  const fill = new THREE.PointLight(0xb48cff, 18, 40);
  fill.position.set(-3, 1, 4);
  scene.add(fill);

  const nodes = new Map();
  const planetGroup = new THREE.Group();
  root.add(planetGroup);

  destinations.forEach((dest, idx) => {
    const accent = ACCENTS[dest.accent] || ACCENTS.cyan;
    const radius = SIZE_R[dest.size] || SIZE_R.md;
    const world = pctToWorld(dest.x, dest.y, dest.featured ? 0.4 : (idx % 3) * -0.25);
    const group = new THREE.Group();
    group.position.copy(world);
    group.userData = { id: dest.id, dest, radius, baseScale: 1 };

    const tex = makePlanetTexture(dest.accent, idx + 3);
    const mat = planetShaderMaterial(tex, accent, !!dest.featured);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), mat);
    sphere.rotation.z = -0.25 + (idx % 4) * 0.08;
    group.add(sphere);

    const atmo = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.18, 32, 24),
      atmosphereMaterial(accent),
    );
    group.add(atmo);

    // Selection ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.35, 0.018, 8, 64),
      new THREE.MeshBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.35,
      }),
    );
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    if (dest.featured) {
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 1.55, 32, 24),
        new THREE.MeshBasicMaterial({
          color: accent,
          transparent: true,
          opacity: 0.08,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      group.add(halo);
    }

    planetGroup.add(group);
    nodes.set(dest.id, { group, sphere, mat, atmo, ring, dest, radius, tex });
  });

  // Post bloom (Destiny lavish glow)
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth || 1, container.clientHeight || 1),
    reduced ? 0.55 : 0.95,
    0.42,
    0.72,
  );
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  const screenMap = new Map();
  const tmp = new THREE.Vector3();

  let raf = 0;
  let t0 = performance.now();
  let pointer = { x: 0.5, y: 0.5 };
  let hoverId = null;
  let travel = null; // { from, to, start, duration, dest, phase }
  let idleCam = { x: 0, y: 0 };
  const homeCam = new THREE.Vector3(0, 0.15, 14.5);
  const homeLook = new THREE.Vector3(0, 0, 0);

  const resize = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.setSize(w, h);
  };
  resize();
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);

  const projectLabels = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    const next = {};
    nodes.forEach((n, id) => {
      tmp.copy(n.group.position);
      tmp.project(camera);
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * h;
      const visible = tmp.z < 1;
      next[id] = { x, y, visible, r: n.radius };
      screenMap.set(id, next[id]);
    });
    handlers.onProject?.(next);
  };

  const pick = (clientX, clientY) => {
    const rect = container.getBoundingClientRect();
    pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);
    const meshes = [];
    nodes.forEach((n) => meshes.push(n.sphere));
    const hits = raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    const hit = hits[0].object;
    for (const [id, n] of nodes) {
      if (n.sphere === hit) return id;
    }
    return null;
  };

  const onMove = (e) => {
    pointer.x = e.clientX / window.innerWidth;
    pointer.y = e.clientY / window.innerHeight;
    if (travel) return;
    const id = pick(e.clientX, e.clientY);
    if (id !== hoverId) {
      hoverId = id;
      container.style.cursor = id ? "pointer" : "default";
      handlers.onHover?.(id);
    }
  };

  const onClick = (e) => {
    if (travel) return;
    const id = pick(e.clientX, e.clientY);
    if (id) handlers.onSelect?.(id);
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  container.addEventListener("click", onClick);

  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const api = {
    travelTo(destId) {
      const node = nodes.get(destId);
      if (!node || travel) return Promise.resolve(false);
      const duration = reduced ? 650 : 2200;
      const toPos = node.group.position.clone().add(new THREE.Vector3(0.15, 0.35, 2.35));
      travel = {
        destId,
        dest: node.dest,
        start: performance.now(),
        duration,
        fromPos: camera.position.clone(),
        fromLook: homeLook.clone(),
        toPos,
        toLook: node.group.position.clone(),
        fromFov: camera.fov,
        toFov: 28,
        phase: "approach",
      };
      handlers.onTravelStart?.(node.dest);
      return new Promise((resolve) => {
        travel.resolve = resolve;
      });
    },
    resetCamera(animate = true) {
      if (!animate || reduced) {
        camera.position.copy(homeCam);
        camera.lookAt(homeLook);
        bloom.strength = reduced ? 0.55 : 0.95;
        streakMat.opacity = 0;
        return;
      }
      travel = {
        destId: null,
        start: performance.now(),
        duration: 900,
        fromPos: camera.position.clone(),
        toPos: homeCam.clone(),
        fromLook: new THREE.Vector3(0, 0, 0),
        toLook: homeLook.clone(),
        phase: "return",
        resolve: null,
      };
    },
    setSelected(id) {
      nodes.forEach((n, nid) => {
        n.ring.material.opacity = nid === id ? 0.95 : 0.28;
        n.group.userData.baseScale = nid === id ? 1.08 : 1;
      });
    },
  };

  const tick = (now) => {
    const dt = Math.min(0.05, (now - t0) / 1000);
    t0 = now;
    const t = now * 0.001;

    nebulaMat.uniforms.uTime.value = t;
    nebulaMat.uniforms.uPointer.value.set(pointer.x - 0.5, pointer.y - 0.5);
    ringGroup.rotation.z = t * 0.02;
    earth.rotation.y = t * 0.015;

    // Parallax idle
    if (!travel) {
      idleCam.x += ((pointer.x - 0.5) * 0.55 - idleCam.x) * 0.04;
      idleCam.y += ((0.5 - pointer.y) * 0.3 - idleCam.y) * 0.04;
      camera.position.x = homeCam.x + idleCam.x;
      camera.position.y = homeCam.y + idleCam.y;
      camera.lookAt(homeLook.x + idleCam.x * 0.2, homeLook.y, 0);
    }

    nodes.forEach((n, id) => {
      n.mat.uniforms.uTime.value = t;
      n.sphere.rotation.y += dt * (n.dest.featured ? 0.35 : 0.18);
      const hover = hoverId === id ? 1.08 : 1;
      const s = THREE.MathUtils.lerp(
        n.group.scale.x,
        n.group.userData.baseScale * hover,
        0.12,
      );
      n.group.scale.setScalar(s);
      n.ring.rotation.z += dt * 0.4;
    });

    // Travel sequence
    if (travel) {
      const u = Math.min(1, (now - travel.start) / travel.duration);
      const e = easeInOut(u);

      if (travel.phase === "approach" || travel.phase === "return") {
        camera.position.lerpVectors(travel.fromPos, travel.toPos, e);
        const look = new THREE.Vector3().lerpVectors(travel.fromLook, travel.toLook, e);
        camera.lookAt(look);

        if (travel.phase === "approach") {
          const warp = Math.sin(Math.min(1, u * 1.15) * Math.PI);
          bloom.strength = 0.95 + warp * 2.4;
          streakMat.opacity = warp * 0.95;
          if (travel.fromFov != null) {
            camera.fov = THREE.MathUtils.lerp(travel.fromFov, travel.toFov || 28, e);
            camera.updateProjectionMatrix();
          }
          const pos = streakGeo.attributes.position.array;
          for (let i = 0; i < streakCount; i++) {
            const base = i * 6;
            const len = 0.35 + warp * (3.2 + (i % 5) * 0.55);
            const ang = (i / streakCount) * Math.PI * 2;
            const rad = 0.4 + (i % 9) * 0.55;
            pos[base] = Math.cos(ang) * rad;
            pos[base + 1] = Math.sin(ang) * rad * 0.62;
            pos[base + 2] = 2 - warp * 6;
            pos[base + 3] = Math.cos(ang) * rad;
            pos[base + 4] = Math.sin(ang) * rad * 0.62;
            pos[base + 5] = pos[base + 2] - len;
          }
          streakGeo.attributes.position.needsUpdate = true;

          const sp = starGeo.attributes.position.array;
          for (let i = 0; i < starCount; i++) {
            sp[i * 3 + 2] += starVel[i] * dt * (12 + warp * 70);
            if (sp[i * 3 + 2] > 10) {
              sp[i * 3] = (Math.random() - 0.5) * 40;
              sp[i * 3 + 1] = (Math.random() - 0.5) * 24;
              sp[i * 3 + 2] = -32;
            }
          }
          starGeo.attributes.position.needsUpdate = true;

          if (u > 0.42 && u < 0.9) handlers.onTravelPeak?.(travel.dest);

          if (u >= 1) {
            bloom.strength = 1.15;
            streakMat.opacity = 0;
            camera.fov = travel.toFov || 28;
            camera.updateProjectionMatrix();
            handlers.onTravelEnd?.(travel.dest);
            travel.resolve?.(true);
            travel = null;
          }
        } else if (u >= 1) {
          bloom.strength = reduced ? 0.55 : 0.95;
          streakMat.opacity = 0;
          camera.fov = 42;
          camera.updateProjectionMatrix();
          travel = null;
        }
      }
    } else if (!reduced) {
      const sp = starGeo.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        sp[i * 3] += Math.sin(t + i) * 0.0008;
      }
      starGeo.attributes.position.needsUpdate = true;
    }

    composer.render();
    projectLabels();
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return {
    api,
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      container.removeEventListener("click", onClick);
      if (ro) ro.disconnect();
      nodes.forEach((n) => {
        n.tex.dispose();
        n.mat.dispose();
        n.sphere.geometry.dispose();
      });
      renderer.dispose();
      composer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
