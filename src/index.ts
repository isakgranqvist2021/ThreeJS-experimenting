/** @format */

import * as THREE from 'three';

import { scene, camera, renderer } from './init';
import { newCube, newSphere } from './objects';

const spheres: THREE.Mesh<THREE.SphereGeometry>[] = [];

const main = (): void => {
	for (let i = 0; i < 1; i++) {
		spheres.push(newSphere(`sphere ${i}`));
	}

	spheres.forEach((sphere: THREE.Mesh<THREE.SphereGeometry>) => {
		scene.add(sphere);
	});

	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
};

window.addEventListener('load', main);
