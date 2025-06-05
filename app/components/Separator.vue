<template>
  <div :class="['flex justify-center', home ? 'py-20' : '']">
    <div class="h-[2px] bg-black dark:bg-white w-full"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  home?: boolean;
}>();
</script>
