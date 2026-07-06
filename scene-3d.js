/**
 * Subtle Three.js wireframe scene for the hero.
 * Skips on mobile and prefers-reduced-motion.
 */
(function () {
  var container = document.getElementById("hero3d");
  if (!container || typeof THREE === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(max-width: 900px)").matches) return;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 4.2;

  var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  var group = new THREE.Group();
  scene.add(group);

  var outer = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 1),
    new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    })
  );
  group.add(outer);

  var inner = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.62, 0),
    new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
    })
  );
  group.add(inner);

  var ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.012, 8, 64),
    new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.22,
    })
  );
  ring.rotation.x = Math.PI / 2.4;
  group.add(ring);

  var particleCount = 120;
  var positions = new Float32Array(particleCount * 3);
  for (var i = 0; i < particleCount; i++) {
    var r = 1.8 + Math.random() * 1.2;
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  var particles = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.025,
      transparent: true,
      opacity: 0.55,
    })
  );
  particles.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(particles);

  var mouse = { x: 0, y: 0 };
  window.addEventListener(
    "mousemove",
    function (e) {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.35;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.25;
    },
    { passive: true }
  );

  function resize() {
    var w = container.clientWidth;
    var h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  resize();
  window.addEventListener("resize", resize);

  var t = 0;
  function animate() {
    t += 0.006;
    group.rotation.y = t * 0.55 + mouse.x;
    group.rotation.x = t * 0.22 + mouse.y;
    inner.rotation.y = -t * 0.9;
    inner.rotation.z = t * 0.45;
    ring.rotation.z = t * 0.15;
    particles.rotation.y = t * 0.08;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();
