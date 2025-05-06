<!--
 * @@file: 
 * @@Author: Wu Jie <wujie08@baidu.com>
 * @@Date: Do not edit
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-15 09:59:39
-->
<template>
  <main class="agency" ref="body">
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import * as THREE from 'three';

const body = ref();
const init = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, body.value.clientWidth / body.value.clientHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(body.value.clientWidth, body.value.clientHeight );
  body.value.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: '#0f7e15'});
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();
}

onMounted(() => {
  nextTick(() => {
    init();
  })
})
</script>

<style lang="scss" scoped>
</style>
