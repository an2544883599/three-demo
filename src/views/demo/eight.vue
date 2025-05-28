<template>
    <main class="agency" ref="body"></main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import * as THREE from 'three';
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const body = ref();
const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, body.value.clientWidth / body.value.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(body.value.clientWidth, body.value.clientHeight);
    // 创建轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    // 设置控制器阻尼
    controls.enableDamping = true;
    // 设置阻尼系数
    controls.dampingFactor = 0.25;
    body.value.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial({ color: '#8e44ad' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(1,1,1);
    camera.position.set(0,0,5);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 设置光源
    // const light = new THREE.PointLight('#f1c40f', 10.0); // 点光源
    // light.position.set(10, 10, 10);
    // const light = new THREE.AmbientLight('#f1c40f', 10.0); // 环境光
    const light = new THREE.DirectionalLight('#f1c40f', 10.0); // 平行光
    light.position.set(2,2,2);
    light.target = cube;
    scene.add(light);
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
};

onMounted(() => {
    nextTick(() => {
        init();
    });
});
</script>
  
  <style lang="scss" scoped>
</style>
  