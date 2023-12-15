import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/Addons";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/textures/matcaps/8.png");
texture.colorSpace = THREE.SRGBColorSpace;

const fontLoader = new FontLoader();

/**
 * Base
 */
// Debug

const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Thank you, Bruno!", {
    font: font,
    size: 0.5,
    height: 0.2,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  });
  textGeometry.center();
  const textMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  scene.add(textMesh);

  const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
  const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });

  console.time("donuts");
  for (let i = 0; i < 200; i++) {
    const donutMesh = new THREE.Mesh(donutGeometry, donutMaterial);

    donutMesh.position.x = (Math.random() - 0.5) * 10;
    donutMesh.position.y = (Math.random() - 0.5) * 10;
    donutMesh.position.z = (Math.random() - 0.5) * 10;

    donutMesh.rotation.x = Math.random() * Math.PI;
    donutMesh.rotation.y = Math.random() * Math.PI;

    const scale = Math.random();

    donutMesh.scale.x = scale;
    donutMesh.scale.y = scale;
    donutMesh.scale.z = scale;
    scene.add(donutMesh);
  }

  console.timeEnd("donuts");
});

/**
 * Textures
 */

/**
 * Object
 */
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial()
// );

// scene.add(cube);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
