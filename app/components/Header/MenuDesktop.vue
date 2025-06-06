<template>
  <div class="flex gap-6">
    <NuxtLink to="/projets" :class="getLinkClass('/projets')">
      <Typographie size="bodyxl">Projets</Typographie>
    </NuxtLink>

    <NuxtLink to="/a-propos" :class="getLinkClass('/a-propos')">
      <Typographie size="bodyxl">A propos</Typographie>
    </NuxtLink>

    <NuxtLink to="/contact" :class="getLinkClass('/contact')">
      <Typographie size="bodyxl">Contact</Typographie>
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
