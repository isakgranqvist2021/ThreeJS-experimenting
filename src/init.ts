/** @format */

import * as THREE from 'three';

export const width = window.innerWidth;
export const height = window.innerHeight;
export const depth = 1000;

const aspect = width / height;

export const scene: THREE.Scene = new THREE.Scene();
export const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
export const camera: THREE.Camera = new THREE.PerspectiveCamera(
	75,
	aspect,
	0.1
);

camera.position.setZ(5);
renderer.setClearColor(0x474747);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
