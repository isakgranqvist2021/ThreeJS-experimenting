/** @format */

import * as THREE from 'three';

import { scene, camera, renderer, gridHelper, controls } from './init';
import { newObject } from './objects';

let torus: THREE.Mesh<THREE.TorusGeometry>;
let lastPressed: string = '';
let rotation = 0;

const main = (): void => {
	const light = new THREE.PointLight(0xffffff);
	light.position.set(1, 5, 50);

	torus = newObject('torus', `Player`) as THREE.Mesh<THREE.TorusGeometry>;
	torus.rotation.y = 102.07;
	window.addEventListener('keydown', (e: KeyboardEvent) => {
		let speed = 0.5;
		let kp = e.key;
		lastPressed = kp;

		if (kp === 'ArrowUp') {
			torus.position.z -= speed;
			torus.position.x -= rotation;
		} else if (kp === 'ArrowDown') {
			torus.position.z += speed;
			torus.position.x += rotation;
		}
	});

	window.addEventListener('keyup', (e: KeyboardEvent) => {
		lastPressed = '';
	});

	scene.add(torus);
	scene.add(light);
	scene.add(gridHelper);
	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);

	if (lastPressed === 'ArrowDown') {
		torus.rotation.z -= 0.1;
	} else if (lastPressed === 'ArrowUp') {
		torus.rotation.z += 0.1;
	} else if (lastPressed === 'ArrowRight') {
		torus.rotation.z -= 0.01;
		rotation = -2;
	} else if (lastPressed === 'ArrowLeft') {
		torus.rotation.z += 0.01;
		rotation = 2;
	}

	controls.update();
	renderer.render(scene, camera);
};

window.addEventListener('load', main);
