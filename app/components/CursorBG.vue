<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition duration-300"
    :style="{
      background: `radial-gradient(600px at ${x}px ${y}px, hsla(199, 100%, 41%, 0.15), transparent 80%)`,
    }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);

function handleMouseMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style></style>
