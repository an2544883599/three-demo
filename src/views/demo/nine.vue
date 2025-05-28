<!--
 * @@file: 
 * @@Author: Wu Jie <wujie08@baidu.com>
 * @@Date: Do not edit
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-14 10:00:28
-->
<template>
    <main class="agency" ref="body"></main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, render, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const body = ref();
const camera = ref();
const renderer = ref();

const init = () => {
    // 创建一个新的场景对象
    const scene = new THREE.Scene();

    // 创建透视相机
    camera.value = new THREE.PerspectiveCamera(75, body.value.clientWidth / body.value.clientHeight, 0.1, 1000);

    // 创建WebGL渲染器
    renderer.value = new THREE.WebGLRenderer();
    // 设置渲染器的大小
    renderer.value.setSize(body.value.clientWidth, body.value.clientHeight);
    // 创建轨道控制器
    const controls = new OrbitControls(camera.value, renderer.value.domElement);
    // 设置控制器阻尼
    controls.enableDamping = true;
    // 设置阻尼系数
    controls.dampingFactor = 0.25;

    // 将渲染器的DOM元素添加到页面中
    body.value.appendChild(renderer.value.domElement);

    // 创建纹理加载器
    const textureLoader = new THREE.TextureLoader();
    // 加载纹理
    const texture = textureLoader.load('./tietu.jpg');
    // 创建平面几何体
    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    // 创建平面材质
    const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    // 允许透明
    planeMaterial.transparent = true;
    const planeCube = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(planeCube);

    camera.value.position.set(5,5,5);

    // 添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 定义动画函数
    function animate() {
        controls.update();
        // 递归调用动画函数
        requestAnimationFrame(animate);
        // 更新立方体的旋转
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // 渲染场景和相机
        renderer.value.render(scene, camera.value);
    }
    // 开始动画
    animate();
};

/**
 * 更新相机尺寸的函数
 *
 * 该函数更新相机的长宽比、投影矩阵和渲染器的大小。
 */
const updateSize = () => {
    // 更新相机长宽比
    camera.value.aspect = body.value.clientWidth / body.value.clientHeight;
    // 更新摄像机的投影矩阵
    camera.value.updateProjectionMatrix();
    // 更新渲染器的大小
    renderer.value.setSize(body.value.clientWidth, body.value.clientHeight);
};

onMounted(() => {
    nextTick(() => {
        init();
        // 监听窗口变化
        window.addEventListener('resize', updateSize);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSize);
});
</script>

<style lang="scss" scoped>
</style>
