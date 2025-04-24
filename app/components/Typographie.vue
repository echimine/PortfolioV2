<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'bodybase';
type Font = 'inter';
type Weight = 'regular' | 'medium' | 'bold';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const props = defineProps<{
  variant?: Variant;
  font?: Font;
  weight?: Weight;
  as?: Tag;
}>();

const variant = props.variant ?? 'bodybase';
const font = props.font ?? 'inter';
const weight = props.weight ?? 'regular';
const as = props.as ?? 'p';
const currentMode = ref<'light' | 'dark'>('light');

// ✅ Initialize MutationObserver only on client side
let observer: MutationObserver | null = null;

const updateMode = () => {
  const isDark = document.documentElement.classList.contains('dark');
  currentMode.value = isDark ? 'dark' : 'light';
};

onMounted(() => {
  updateMode();

  // ✅ Safely initialize MutationObserver (browser only)
  if (typeof window !== 'undefined') {
    observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});

const variantClasses: Record<Variant, string> = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  bodybase: 'text-base',
};

const fontClasses: Record<Font, string> = {
  inter: 'font-Inter',
};

const weightClasses: Record<Weight, string> = {
  regular: 'font-regular',
  medium: 'font-medium',
  bold: 'font-bold',
};

const modeClasses: Record<'light' | 'dark', string> = {
  light: 'text-black',
  dark: 'text-white',
};

const finalClass = computed(() =>
  [
    variantClasses[variant],
    fontClasses[font],
    weightClasses[weight],
    modeClasses[currentMode.value],
  ].join(' ')
);
</script>

<template>
  <component :is="as" :class="finalClass">
    <slot />
  </component>
</template>
