import React, { useEffect } from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import './styles.css';

const ThreeBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById('three-bg-canvas');
        const container = document.getElementById('three-bg-container');
        const renderer = new THREE.WebGLRenderer({
            canvas
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(new THREE.Color("#000000"));
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const fov = 75, aspect = container.clientWidth/container.clientHeight, near = 0.1, far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;
        renderer.render(scene, camera);

        const color = 0xffffff, intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        const boxWidth = 1, boxHeight = 1, boxDepth = 1;
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(getRandomParticelPos(1000), 3)
        );
        const loader = new THREE.TextureLoader();
        const material = new THREE.PointsMaterial({
            size: 0.1,
            map: loader.load(
                "/images/musicicon.png"
              ),
              transparent: true
        });
        const cube = new THREE.Points(geometry, material);
        scene.add(cube);

        // mouse
        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const resizeRendererToDisplaySize = (renderer) => {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            // resize only when necessary
            if (needResize) {
                //3rd parameter `false` to change the internal canvas size
                renderer.setSize(width, height, false);
            }
            return needResize;
        };

        const render = (time) => {
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                // changing the camera aspect to remove the strechy problem
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            cube.position.x = mouseY * 0.00013;
            cube.position.y = mouseX * -0.00013;
            // Re-render the scene
            renderer.render(scene, camera);
            // loop
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }, [])

    const getRandomParticelPos = (particleCount) => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          arr[i] = (Math.random() - 0.5) * 10;
        }
        return arr;
      };

    return (
        <div id='three-bg-container'>
            <canvas id="three-bg-canvas" />
        </div>
    )
}

export default ThreeBackground;
