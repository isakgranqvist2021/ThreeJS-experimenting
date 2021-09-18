/** @format */

import * as THREE from 'three';

import { scene, camera, renderer, gridHelper, controls, light } from './init';
import { newMesh, newSphere, newCube } from './objects';

let player = {
	head: newMesh(newSphere(0.1)),
	body: newMesh(newCube(0.2, 0.55, 0.1)),
	leftArm: newMesh(newCube(0.25, 0.1, 0.1)),
	rightArm: newMesh(newCube(0.25, 0.1, 0.1)),
};

const main = (): void => {
	let box = new THREE.Box3().setFromObject(player.body);

	scene.add(light);
	scene.add(gridHelper);

	scene.add(player.head);
	scene.add(player.body);
	scene.add(player.leftArm);
	scene.add(player.rightArm);

	player.leftArm.position.x = box.min.x * 2;
	player.rightArm.position.x = box.max.x * 2;
	player.head.position.y = box.max.y + 0.1;
	console.log(box);
	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);

	controls.update();
	renderer.render(scene, camera);
};

window.addEventListener('load', main);
