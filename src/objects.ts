/** @format */

import * as THREE from 'three';
import * as dat from 'dat.gui';

const gui = new dat.GUI();

const addToGui = (object: any, label: string): void => {
	let min = -1000;
	let max = 1000;
	let step = 0.01;

	let root = gui.addFolder(label);
	let rotation = root.addFolder('rotation');
	rotation.add(object.rotation, 'x', min, max, step);
	rotation.add(object.rotation, 'y', min, max, step);
	rotation.add(object.rotation, 'z', min, max, step);

	let position = root.addFolder('position');
	position.add(object.position, 'x', min, max, step);
	position.add(object.position, 'y', min, max, step);
	position.add(object.position, 'z', min, max, step);

	let scale = root.addFolder('scale');
	scale.add(object.position, 'x', min, max, step);
	scale.add(object.position, 'y', min, max, step);
	scale.add(object.position, 'z', min, max, step);
};

export const newTorus = (label: string): THREE.Mesh<THREE.TorusGeometry> => {
	const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
	const material = new THREE.MeshStandardMaterial({
		color: 0x3480eb,
	});
	const torus = new THREE.Mesh(geometry, material);
	torus.position.setZ(-100);
	torus.position.setX(
		Math.floor(Math.random() + 0.5) === 0
			? Math.random() * -100
			: Math.random() * 100
	);
	addToGui(torus, label);
	return torus;
};

export const newCube = (label: string): THREE.Mesh<THREE.BoxGeometry> => {
	const geometry = new THREE.BoxGeometry(2, 2, 0.5);
	const material = new THREE.MeshStandardMaterial({
		color: 0x3480eb,
	});
	const cube = new THREE.Mesh(geometry, material);
	addToGui(cube, label);
	return cube;
};

export const newSphere = (label: string): THREE.Mesh<THREE.SphereGeometry> => {
	const geometry = new THREE.SphereGeometry();
	const material = new THREE.MeshBasicMaterial({
		color: 0x3480eb,
	});
	const sphere = new THREE.Mesh(geometry, material);
	addToGui(sphere, label);
	return sphere;
};
