<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      v-model="isDark"
      @change="toggleDarkMode"
    />
    <div
      :class="[
        'w-14 h-8 rounded-full transition-colors',
        isDark ? 'bg-orange' : 'bg-blue',
      ]"
    ></div>
    <div
      :class="[
        'absolute left-1 top-1 w-6 h-6 rounded-full transition-all',
        isDark ? 'translate-x-6 bg-white' : 'bg-black',
      ]"
    ></div>
  </label>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleDarkMode = () => {
  // toggle au click ajout de la class
  isDark.value
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');

  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

// au chargement du composant il vient regarder dans le local storage le theme color
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  }
});
</script>
