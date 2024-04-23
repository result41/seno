import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

var dev = 0;

//var canvas = document.getElementById('cubeCanvas');
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cubeCanvas') });

//const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//document.body.cubeCanvas(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(255,255,255)");

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.rotation.set(0, 0, 0);
/*
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
*/

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.update();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const loader = new GLTFLoader();

loader.load( './testModel/200y.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
