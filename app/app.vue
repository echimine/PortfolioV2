<template>
  <div>
    <NuxtLayout> <NuxtPage /></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  if (process.client) {
    const Lenis = (await import('@studio-freight/lenis')).default;
    const lenis = new Lenis();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetEl = document.getElementById(targetId || '');

        if (targetEl) {
          lenis.scrollTo(targetEl, {
            offset: 0,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      });
    });

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
});
</script>

<style>
html,
body {
}

/* ::-webkit-scrollbar {
  display: none;
} */
</style>
