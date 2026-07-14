import * as THREE from "three";

export function initHeroScene(container) {
  if (!container) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  if (window.matchMedia("(max-width: 900px)").matches) return () => {};

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 4.4;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  const green = 0xc6ff3d;
  const dim = 0x5a6b22;

  function wire(geo, color, opacity) {
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity })
    );
    group.add(mesh);
    return mesh;
  }

  const shell = wire(new THREE.IcosahedronGeometry(1.2, 1), dim, 0.28);
  const core = wire(new THREE.OctahedronGeometry(0.55, 0), green, 0.55);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.7, 0.01, 8, 96),
    new THREE.MeshBasicMaterial({ color: green, transparent: true, opacity: 0.35 })
  );
  ring.rotation.x = Math.PI / 2.3;
  group.add(ring);

  const count = 160;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.7 + Math.random() * 1.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const particles = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: green, size: 0.022, transparent: true, opacity: 0.55 })
  );
  particles.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(particles);

  const mouse = { x: 0, y: 0 };
  const onMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.35;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.25;
  };
  window.addEventListener("mousemove", onMove, { passive: true });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  resize();
  window.addEventListener("resize", resize);

  let t = 0;
  let raf = 0;
  const animate = () => {
    t += 0.006;
    group.rotation.y = t * 0.45 + mouse.x;
    group.rotation.x = t * 0.18 + mouse.y;
    core.rotation.y = -t * 0.9;
    shell.rotation.z = t * 0.12;
    ring.rotation.z = t * 0.2;
    particles.rotation.y = t * 0.08;
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
