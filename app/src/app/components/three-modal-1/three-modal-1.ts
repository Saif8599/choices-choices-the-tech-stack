import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-modal-1',
  imports: [],
  templateUrl: './three-modal-1.html',
  styleUrl: './three-modal-1.css',
})
export class ThreeModal1 implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box') as HTMLCanvasElement;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const material = new THREE.MeshToonMaterial();

    // Lights
    const ambientLight = new THREE.AmbientLight(0x8880888, 5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 29);
    pointLight.position.set(2, 1, 2);
    scene.add(pointLight);

    // Geometry
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(5, 1.5, 16, 100), material);
    scene.add(torus, box);

    // 👇 Gebruik canvas echte grootte van CSS
    const getCanvasSize = () => ({
      width: canvas.clientWidth,
      height: canvas.clientHeight,
    });

    let canvasSizes = getCanvasSize();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setClearColor(10909, 56); // Donkere achtergrond
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    // Animation
    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      box.rotation.x = elapsedTime;
      box.rotation.y = elapsedTime;
      box.rotation.z = elapsedTime;

      torus.rotation.x = -elapsedTime;
      torus.rotation.y = -elapsedTime;
      torus.rotation.z = -elapsedTime;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }
}
