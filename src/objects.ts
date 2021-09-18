/** @format */

import * as THREE from 'three';
import * as dat from 'dat.gui';

const gui = new dat.GUI();

export const addToGui = (object: any, label: string) => {};
export const newTorus = () => new THREE.TorusGeometry(2, 3, 25, 50);
export const newCube = (width: number, height: number, depth: number) =>
	new THREE.BoxGeometry(width, height, depth);
export const newSphere = (r: number) => new THREE.SphereGeometry(r);
export const newCylinder = () => new THREE.CylinderGeometry();

export const newMesh = (geometry: any, color?: THREE.ColorRepresentation) =>
	new THREE.Mesh(
		geometry,
		new THREE.MeshStandardMaterial({
			color: color || 0x3480eb,
			wireframe: true,
		})
	);
