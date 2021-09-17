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

export const newObject = (
	object: string,
	label: string
): THREE.Mesh<
	| THREE.SphereGeometry
	| THREE.TorusGeometry
	| THREE.BoxGeometry
	| THREE.CylinderGeometry
> => {
	let geometry;

	const material = new THREE.MeshBasicMaterial({
		color: 0x3480eb,
		wireframe: true,
	});

	switch (object) {
		case 'torus':
			geometry = new THREE.TorusGeometry(2, 3, 25, 50);
			break;
		case 'cube':
			geometry = new THREE.BoxGeometry(2, 2, 0.5);
			break;
		case 'sphere':
			geometry = new THREE.SphereGeometry();
			break;
		case 'cylinder':
			geometry = new THREE.CylinderGeometry();
			break;
		default:
			return;
	}

	let mesh = new THREE.Mesh(geometry, material);
	mesh.position.setY(4.7);
	addToGui(mesh, label);
	return mesh;
};
