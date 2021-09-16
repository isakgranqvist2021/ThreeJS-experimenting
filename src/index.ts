/** @format */

import * as THREE from 'three';

import { scene, camera, renderer } from './init';
import { newCube, newSphere, newTorus } from './objects';

const spheres: THREE.Mesh<THREE.SphereGeometry>[] = [];
const toruses: THREE.Mesh<THREE.TorusGeometry>[] = [];

const main = (): void => {
	const light = new THREE.PointLight(0xffffff);
	light.position.set(1, 5, 50);

	for (let i = 0; i < 25; i++) {
		toruses.push(newTorus(`torus ${i}`));
	}

	toruses.forEach((sphere: any) => {
		scene.add(sphere);
	});

	scene.add(light);
	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);

	toruses.forEach((sphere: any) => {
		//	sphere.rotation.x += 0.1;
		sphere.rotation.z += 0.1;
		sphere.rotation.y += 0.1;
	});

	renderer.render(scene, camera);
};

window.addEventListener('load', main);
