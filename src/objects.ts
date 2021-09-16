/** @format */

import * as THREE from 'three';
import * as dat from 'dat.gui';

const gui = new dat.GUI();

const addToGui = (object: any, label: string): void => {
	const value = 10;

	let root = gui.addFolder(label);
	let rotation = root.addFolder('rotation');
	rotation.add(object.rotation, 'x', -value, value, 0.1);
	rotation.add(object.rotation, 'y', -value, value, 0.1);
	rotation.add(object.rotation, 'z', -value, value, 0.1);

	let position = root.addFolder('position');
	position.add(object.position, 'x', -value, value, 0.1);
	position.add(object.position, 'y', -value, value, 0.1);
	position.add(object.position, 'z', -value, value, 0.1);

	let scale = root.addFolder('scale');
	scale.add(object.position, 'x', -value, value, 0.1);
	scale.add(object.position, 'y', -value, value, 0.1);
	scale.add(object.position, 'z', -value, value, 0.1);
};

export const newCube = (label: string): THREE.Mesh<THREE.BoxGeometry> => {
	const geometry = new THREE.BoxGeometry(2, 2, 0.5);
	const material = new THREE.MeshBasicMaterial({
		color: 0x3480eb,
		wireframe: true,
	});
	const cube = new THREE.Mesh(geometry, material);
	addToGui(cube, label);
	return cube;
};

export const newSphere = (label: string): THREE.Mesh<THREE.SphereGeometry> => {
	const geometry = new THREE.SphereGeometry();
	const material = new THREE.MeshBasicMaterial({
		color: '0x3480eb',
		wireframe: true,
	});
	const sphere = new THREE.Mesh(geometry, material);
	addToGui(sphere, label);
	return sphere;
};
