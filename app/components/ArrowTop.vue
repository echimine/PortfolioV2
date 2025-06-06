<template>
  <div
    @click="scrollToTop"
    class="fixed bottom-4 right-4 z-50 cursor-pointer p-3 rounded-full bg-blue text-white dark:bg-orange hover:bg-white dark:hover:bg-black hover:text-blue dark:hover:text-orange transition-all duration-300"
    :class="[
      isVisible
        ? 'animate-fade-up pointer-events-auto'
        : 'opacity-0 pointer-events-none',
    ]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
