<template>
  <button
    :class="[
      'inline-flex items-center justify-center px-4 py-2 hover:dark:bg-white hover:dark:text-orange hover:bg-black hover:text-blue rounded-xl text-black  dark:bg-orange bg-blue transition-all font-Inter',
      btnClass,
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  btnClass?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>();
</script>
