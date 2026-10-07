import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const SIZE_R = { lg: 0.95, md: 0.58, sm: 0.42 };

function pctToWorld(x, y, z = 0) {
  // Match Destiny Destinations framing: wide map, planets mid-field
  return new THREE.Vector3(((x - 50) / 50) * 10.5, -((y - 42) / 50) * 5.8 + 0.6, z);
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
  renderer.toneMappingExposure = 0.92;
  container.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, {
    width: "100%",
    height: "100%",
    display: "block",
  });
  return renderer;
}

/**
 * Destiny Destinations–faithful Director stage.
 * Restrained bloom, textured planets, Earth horizon, soft parallax.
 */
export function initDirectorScene(container, destinations, handlers = {}) {
  if (!container) return { api: {}, dispose: () => {} };

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = makeRenderer(container);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
  const homeCam = new THREE.Vector3(0, 0.35, 16.2);
  const homeLook = new THREE.Vector3(0, -0.2, 0);
  camera.position.copy(homeCam);

  const root = new THREE.Group();
  scene.add(root);
  const loader = new THREE.TextureLoader();

  // —— Background ——
  const bgGeo = new THREE.SphereGeometry(80, 48, 32);
  const bgMat = new THREE.MeshBasicMaterial({
    color: 0x070b16,
    side: THREE.BackSide,
  });
  // Try milky-way / stars plate if present
  loader.load(
    "/assets/planets/stars.jpg",
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      bgMat.map = tex;
      bgMat.color.set(0xffffff);
      bgMat.needsUpdate = true;
    },
    undefined,
    () => {},
  );
  root.add(new THREE.Mesh(bgGeo, bgMat));

  // Nebula dust layers (restrained — Destiny space, not neon soup)
  const wash = new THREE.Mesh(
    new THREE.PlaneGeometry(55, 32),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 }, uPointer: { value: new THREE.Vector2(0, 0) } },
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
      `,
      fragmentShader: `
        uniform float uTime; uniform vec2 uPointer; varying vec2 vUv;
        float n(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          vec2 uv = vUv + uPointer*0.02;
          float d = distance(uv, vec2(0.52, 0.36));
          float a = smoothstep(0.75, 0.08, d) * 0.42;
          float dust = smoothstep(0.35, 0.85, n(uv*18.0 + uTime*0.01));
          vec3 c = mix(vec3(0.03,0.06,0.12), vec3(0.1,0.07,0.18), 0.4+0.15*sin(uTime*0.07));
          c += vec3(0.05,0.08,0.14) * dust * 0.35;
          gl_FragColor = vec4(c, a);
        }
      `,
    }),
  );
  wash.position.z = -40;
  root.add(wash);

  // Stars
  const starCount = reduced ? 600 : 2200;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 70;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
    starPos[i * 3 + 2] = -8 - Math.random() * 50;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      color: 0xe8f0ff,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      sizeAttenuation: true,
    }),
  );
  root.add(stars);

  // Soft orbital HUD rings (very faint — Destiny style)
  const ringGroup = new THREE.Group();
  ringGroup.position.set(0, 0.4, -1.5);
  [3.2, 5.4, 7.8].forEach((r, i) => {
    const pts = [];
    for (let s = 0; s <= 180; s++) {
      // dashed feel: skip segments
      if (s % 6 === 0 || s % 6 === 1) continue;
      const a = (s / 180) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.55, 0));
    }
    ringGroup.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({
          color: 0xa8c4e8,
          transparent: true,
          opacity: 0.09 + i * 0.025,
        }),
      ),
    );
  });
  root.add(ringGroup);

  // —— Earth horizon (hero of Destiny Destinations) ——
  const earthGroup = new THREE.Group();
  earthGroup.position.set(0, -14.8, -2);
  const earthGeo = new THREE.SphereGeometry(16.5, 96, 64);
  const earthMat = new THREE.MeshStandardMaterial({
    color: 0x8899aa,
    roughness: 0.78,
    metalness: 0.08,
  });
  loader.load("/assets/planets/earth.jpg", (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    earthMat.map = tex;
    earthMat.needsUpdate = true;
  });
  loader.load("/assets/planets/earth_normal.jpg", (tex) => {
    earthMat.normalMap = tex;
    earthMat.normalScale.set(0.6, 0.6);
    earthMat.needsUpdate = true;
  });
  loader.load("/assets/planets/earth_specular.jpg", (tex) => {
    earthMat.roughnessMap = tex;
    earthMat.needsUpdate = true;
  });
  const earth = new THREE.Mesh(earthGeo, earthMat);
  earth.rotation.x = 0.15;
  earthGroup.add(earth);

  // Atmosphere rim
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(16.85, 64, 48),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      uniforms: {},
      vertexShader: `
        varying vec3 vNormal;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main(){
          float f = pow(0.65 - dot(vNormal, vec3(0.0,0.2,1.0)), 2.5);
          f = clamp(f, 0.0, 1.0);
          gl_FragColor = vec4(0.45, 0.7, 1.0, f * 0.55);
        }
      `,
    }),
  );
  earthGroup.add(atmo);

  // Lat/long grid overlay (Destiny map feel)
  const gridMat = new THREE.LineBasicMaterial({
    color: 0xb8d4ff,
    transparent: true,
    opacity: 0.12,
  });
  for (let i = -6; i <= 6; i++) {
    const lat = [];
    const phi = (i / 7) * Math.PI * 0.35 + Math.PI * 0.5;
    for (let j = 0; j <= 64; j++) {
      const th = (j / 64) * Math.PI * 2;
      const r = 16.55;
      lat.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(th),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(th),
        ),
      );
    }
    earthGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(lat), gridMat));
  }
  root.add(earthGroup);

  // Lights — cinematic key from upper right like Destiny
  scene.add(new THREE.AmbientLight(0x6a7a9a, 0.45));
  const key = new THREE.DirectionalLight(0xfff2e0, 1.55);
  key.position.set(6, 8, 10);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x88aaff, 0.55);
  rim.position.set(-8, 2, -4);
  scene.add(rim);
  const fill = new THREE.PointLight(0xa090ff, 12, 50);
  fill.position.set(0, 2, 6);
  scene.add(fill);

  // —— Destination planets ——
  const nodes = new Map();
  const planetGroup = new THREE.Group();
  root.add(planetGroup);

  destinations.forEach((dest, idx) => {
    const radius = SIZE_R[dest.size] || SIZE_R.md;
    const world = pctToWorld(dest.x, dest.y, dest.featured ? 0.5 : ((idx % 3) - 1) * 0.2);
    const group = new THREE.Group();
    group.position.copy(world);
    group.userData = { id: dest.id, dest, radius, baseScale: 1 };

    const glowColor = new THREE.Color(dest.glow || "#9ec9ff");

    // Soft aura disc (Destiny destination glow — behind planet)
    const aura = new THREE.Mesh(
      new THREE.CircleGeometry(radius * (dest.featured ? 2.4 : 1.85), 48),
      new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: dest.featured ? 0.22 : 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    aura.position.z = -0.15;
    group.add(aura);

    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.62,
      metalness: 0.08,
      clearcoat: 0.15,
      clearcoatRoughness: 0.55,
      emissive: glowColor,
      emissiveIntensity: dest.featured ? 0.12 : 0.04,
    });
    loader.load(dest.texture, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      mat.map = tex;
      mat.needsUpdate = true;
    });

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 48), mat);
    sphere.rotation.z = -0.2;
    // Local key light per planet for readable terminator (Destiny Director look)
    const localKey = new THREE.DirectionalLight(0xfff6ea, 1.1);
    localKey.position.set(2.2, 1.4, 3.2);
    group.add(localKey);
    group.add(sphere);

    // Thin atmosphere shell
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.1, 32, 24),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        uniforms: { uColor: { value: glowColor.clone() } },
        vertexShader: `
          varying vec3 vNormal;
          void main(){
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          varying vec3 vNormal;
          void main(){
            float f = pow(0.7 - dot(vNormal, vec3(0.0,0.15,1.0)), 2.6);
            f = clamp(f, 0.0, 1.0);
            gl_FragColor = vec4(uColor, f * 0.55);
          }
        `,
      }),
    );
    group.add(shell);

    // Selection ring (thin torus — Destiny node frame)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.22, 0.012, 8, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.22,
      }),
    );
    ring.rotation.x = Math.PI / 2.2;
    group.add(ring);

    if (dest.featured) {
      // Pale Heart–style triangular portal mark
      const mark = new THREE.Mesh(
        new THREE.CircleGeometry(radius * 0.35, 3),
        new THREE.MeshBasicMaterial({
          color: 0xffe8ff,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      mark.position.z = radius * 0.95;
      group.add(mark);
    }

    planetGroup.add(group);
    nodes.set(dest.id, { group, sphere, mat, ring, aura, dest, radius });
  });

  // Post — light bloom only (Destiny is soft, not neon club)
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(1, 1),
    reduced ? 0.28 : 0.42,
    0.55,
    0.82,
  );
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  const tmp = new THREE.Vector3();
  let raf = 0;
  let t0 = performance.now();
  let pointer = { x: 0.5, y: 0.5 };
  let hoverId = null;
  let travel = null;
  let idle = { x: 0, y: 0 };

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
      tmp.copy(n.group.position).project(camera);
      next[id] = {
        x: (tmp.x * 0.5 + 0.5) * w,
        y: (-tmp.y * 0.5 + 0.5) * h,
        visible: tmp.z < 1,
        r: n.radius,
      };
    });
    handlers.onProject?.(next);
  };

  const pick = (clientX, clientY) => {
    const rect = container.getBoundingClientRect();
    pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);
    const meshes = [...nodes.values()].map((n) => n.sphere);
    const hits = raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    for (const [id, n] of nodes) if (n.sphere === hits[0].object) return id;
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

  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

  const api = {
    travelTo(destId) {
      const node = nodes.get(destId);
      if (!node || travel) return Promise.resolve(false);
      const duration = reduced ? 700 : 1950;
      travel = {
        dest: node.dest,
        start: performance.now(),
        duration,
        fromPos: camera.position.clone(),
        toPos: node.group.position.clone().add(new THREE.Vector3(0.1, 0.15, 2.6)),
        fromLook: homeLook.clone(),
        toLook: node.group.position.clone(),
        fromFov: camera.fov,
        toFov: 26,
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
        camera.fov = 38;
        camera.updateProjectionMatrix();
        camera.lookAt(homeLook);
        bloom.strength = reduced ? 0.28 : 0.42;
        return;
      }
      travel = {
        dest: null,
        start: performance.now(),
        duration: 850,
        fromPos: camera.position.clone(),
        toPos: homeCam.clone(),
        fromLook: new THREE.Vector3().copy(homeLook),
        toLook: homeLook.clone(),
        fromFov: camera.fov,
        toFov: 38,
        phase: "return",
        resolve: null,
      };
    },
    setSelected(id) {
      nodes.forEach((n, nid) => {
        n.ring.material.opacity = nid === id ? 0.85 : 0.22;
        n.aura.material.opacity = nid === id ? (n.dest.featured ? 0.32 : 0.2) : n.dest.featured ? 0.22 : 0.12;
        n.group.userData.baseScale = nid === id ? 1.06 : 1;
      });
    },
  };

  const tick = (now) => {
    const dt = Math.min(0.05, (now - t0) / 1000);
    t0 = now;
    const t = now * 0.001;

    wash.material.uniforms.uTime.value = t;
    wash.material.uniforms.uPointer.value.set(pointer.x - 0.5, pointer.y - 0.5);
    ringGroup.rotation.z = t * 0.012;
    earth.rotation.y = t * 0.012;

    if (!travel) {
      idle.x += ((pointer.x - 0.5) * 0.45 - idle.x) * 0.035;
      idle.y += ((0.5 - pointer.y) * 0.25 - idle.y) * 0.035;
      camera.position.x = homeCam.x + idle.x;
      camera.position.y = homeCam.y + idle.y;
      camera.lookAt(homeLook.x + idle.x * 0.15, homeLook.y, 0);
      // Parallax planets slightly
      planetGroup.position.x = idle.x * -0.15;
      planetGroup.position.y = idle.y * -0.1;
      earthGroup.position.x = idle.x * 0.2;
    }

    nodes.forEach((n, id) => {
      n.sphere.rotation.y += dt * (n.dest.featured ? 0.22 : 0.12);
      const hover = hoverId === id ? 1.06 : 1;
      const s = THREE.MathUtils.lerp(n.group.scale.x, n.group.userData.baseScale * hover, 0.1);
      n.group.scale.setScalar(s);
    });

    if (travel) {
      const u = Math.min(1, (now - travel.start) / travel.duration);
      const e = ease(u);
      camera.position.lerpVectors(travel.fromPos, travel.toPos, e);
      const look = new THREE.Vector3().lerpVectors(travel.fromLook, travel.toLook, e);
      camera.lookAt(look);
      if (travel.fromFov != null) {
        camera.fov = THREE.MathUtils.lerp(travel.fromFov, travel.toFov, e);
        camera.updateProjectionMatrix();
      }

      if (travel.phase === "approach") {
        // Destiny travel is a push-in + light bloom swell, not hyperspace spam
        const swell = Math.sin(Math.min(1, u * 1.1) * Math.PI);
        bloom.strength = 0.42 + swell * 0.55;
        if (u > 0.4 && u < 0.85) handlers.onTravelPeak?.(travel.dest);
        if (u >= 1) {
          bloom.strength = 0.5;
          handlers.onTravelEnd?.(travel.dest);
          travel.resolve?.(true);
          travel = null;
        }
      } else if (u >= 1) {
        bloom.strength = reduced ? 0.28 : 0.42;
        camera.fov = 38;
        camera.updateProjectionMatrix();
        travel = null;
      }
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
      renderer.dispose();
      composer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
