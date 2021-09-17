/** @format */

import * as THREE from 'three';

import { scene, camera, renderer, gridHelper } from './init';
import { newObject } from './objects';

const spheres: any[] = [];
const toruses: any[] = [];

const main = (): void => {
	const light = new THREE.PointLight(0xffffff);
	light.position.set(1, 5, 50);

	for (let i = 0; i < 1; i++) {
		toruses.push(newObject('torus', `torus ${i}`));
	}

	toruses.forEach((sphere: any) => {
		scene.add(sphere);
	});

	window.addEventListener('keydown', (e: KeyboardEvent) => {
		let torus = toruses[0];
		let speed = 15;

		switch (e.key) {
			case 'ArrowLeft':
				torus.position.setX(torus.position.x - speed);
				return;
			case 'ArrowRight':
				torus.position.setX(torus.position.x + speed);
				return;
			case 'ArrowUp':
				torus.position.setY(torus.position.y + speed);
				return;
			case 'ArrowDown':
				torus.position.setY(torus.position.y - speed);
				return;
			default:
				return;
		}
	});

	scene.add(light);
	scene.add(gridHelper);
	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);

	toruses.forEach((torus: any) => {
		//	torus.rotation.x += 0.1;
		torus.rotation.z += 0.01;
		torus.rotation.y += 0.01;
	});

	renderer.render(scene, camera);
};

window.addEventListener('load', main);
