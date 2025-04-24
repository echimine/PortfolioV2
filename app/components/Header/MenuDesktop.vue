<template>
  <div class="flex gap-6">
    <NuxtLink to="/projets" :class="getLinkClass('/projets')">
      Projets
    </NuxtLink>

    <NuxtLink to="/a-propos" :class="getLinkClass('/a-propos')">
      A propos
    </NuxtLink>

    <NuxtLink to="/contact" :class="getLinkClass('/contact')">
      Contact
    </NuxtLink>

    <SwitchColor />
  </div>
</template>

<script setup lang="ts">
import SwitchColor from '../Buttons/SwitchColor.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const getLinkClass = (targetPath: string) => {
  return route.path === targetPath
    ? 'underline text-blue dark:text-orange font-Inter font-normal'
    : 'font-Inter font-normal dark:text-white text-black';
};
</script>
