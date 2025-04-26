<template>
  <div class="relative md:hidden">
    <!-- Bouton hamburger EN DEHORS de menuRef -->
    <button
      @click="toggleMenu"
      class="p-2 focus:outline-none z-30 relative"
      ref="buttonRef"
    >
      <span
        class="block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 mb-1"
        :class="{ 'rotate-45 translate-y-1.5': isOpen }"
      />
      <span
        class="block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300"
        :class="{ 'opacity-0': isOpen }"
      />
      <span
        class="block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 mt-1"
        :class="{ '-rotate-45 -translate-y-1.5': isOpen }"
      />
    </button>

    <!-- Menu déroulant DANS SON WRAPPER -->
  </div>
  <transition name="fade">
    <div
      v-if="isOpen"
      ref="menuRef"
      class="absolute right-0 top-8 w-56 bg-white dark:bg-black shadow-lg rounded-xl p-4 flex flex-col gap-4 z-20"
    >
      <NuxtLink
        @click="closeMenu"
        to="/projets"
        :class="getLinkClass('/projets')"
        >Projets</NuxtLink
      >
      <NuxtLink
        @click="closeMenu"
        to="/a-propos"
        :class="getLinkClass('/a-propos')"
        >À propos</NuxtLink
      >
      <NuxtLink
        @click="closeMenu"
        to="/contact"
        :class="getLinkClass('/contact')"
        >Contact</NuxtLink
      >
      <SwitchColor />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { onClickOutside } from '@vueuse/core';
import SwitchColor from '../Buttons/SwitchColor.vue';

const isOpen = ref(false);
const route = useRoute();
const menuRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const getLinkClass = (targetPath: string) => {
  return route.path === targetPath
    ? 'underline text-blue dark:text-orange font-Inter font-normal'
    : 'font-Inter font-normal dark:text-white text-black';
};

// ✅ ferme le menu si on clique en dehors du menu ET du bouton
onClickOutside(menuRef, (event) => {
  if (isOpen.value && !buttonRef.value?.contains(event.target as Node)) {
    closeMenu();
  }
});
</script>
