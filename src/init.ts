/** @format */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export const width = window.innerWidth;
export const height = window.innerHeight;
export const depth = 1000;

const aspect = width / height;

export const scene = new THREE.Scene();
export const renderer = new THREE.WebGLRenderer();
export const gridHelper = new THREE.GridHelper(200, 50);
export const camera = new THREE.PerspectiveCamera(75, aspect, 0.1);
export const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 25, 10);
renderer.setClearColor(0x474747);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);
