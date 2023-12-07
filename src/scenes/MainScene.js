// src/scenes/MainScene.js
import * as THREE from 'three';
import { Board } from '../components/board';

export class MainScene {
    constructor(domElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 10);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        domElement.appendChild(this.renderer.domElement);

        const light = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 10, 10);
        this.scene.add(directionalLight);

        this.init();
    }

    init() {
        const board = new Board();
        this.scene.add(board.getMesh());
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        this.renderer.dispose();
    }
}
