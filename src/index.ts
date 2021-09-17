/** @format */

import * as THREE from 'three';

import { scene, camera, renderer, gridHelper, controls, light } from './init';
import { newMesh, newSphere } from './objects';

let stars: THREE.Mesh<any, THREE.MeshStandardMaterial>[] = [];

const main = (): void => {
	scene.add(light);
	scene.add(gridHelper);

	stars = new Array(25).fill(0).map((_: any) => {
		let geometry = newSphere(0.45);
		let star = newMesh(geometry, 0xdb9f14);
		star.position.set(
			THREE.MathUtils.randInt(-10, 10),
			THREE.MathUtils.randInt(0, 10),
			THREE.MathUtils.randInt(-10, 10)
		);
		scene.add(star);
		return star;
	});

	animate();
};

const animate = (): void => {
	requestAnimationFrame(animate);

	stars.forEach((star: THREE.Mesh<any, THREE.MeshStandardMaterial>) => {
		star.rotation.y -= 0.1;
	});

	controls.update();
	renderer.render(scene, camera);
};

window.addEventListener('load', main);
