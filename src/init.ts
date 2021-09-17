/** @format */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1
);

export const scene = new THREE.Scene();
export const renderer = new THREE.WebGLRenderer();
export const gridHelper = new THREE.GridHelper(15, 50);
export const controls = new OrbitControls(camera, renderer.domElement);
export const light = new THREE.PointLight(0xffffff);

camera.position.set(0, 2, 2);
light.position.set(0, 0, 50);
renderer.setClearColor(0x474747);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
