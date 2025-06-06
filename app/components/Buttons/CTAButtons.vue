<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="!href && disabled"
    :class="[
      'inline-flex items-center justify-center px-4 py-2 rounded-xl text-black dark:text-white border-2 transition-all duration-300 font-Inter',
      plein
        ? 'bg-blue hover:bg-white hover:text-black dark:bg-orange dark:hover:bg-black text-white border-blue dark:border-orange'
        : 'hover:dark:bg-orange hover:bg-blue hover:text-white border-blue dark:border-orange',
      btnClass,
      disabled && !href ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  btnClass?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  plein?: boolean;
}>();
</script>
