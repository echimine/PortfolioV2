<template>
  <div :class="['flex justify-center', home ? 'py-20' : '']">
    <div
      :class="[
        `bg-black dark:bg-white w-full`,
        projet ? 'h-[1px]' : 'h-[2px]',
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  home?: boolean;
  projet?: boolean;
}>();
</script>
