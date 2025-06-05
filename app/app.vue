<template>
  <div>
    <NuxtLayout> <NuxtPage /></NuxtLayout>
  </div>
</template>

<style>
html,
body {
  scroll-behavior: auto !important; /* important : évite les conflits avec scroll-smooth Tailwind */
  will-change: transform;
  overscroll-behavior: none;
}

/* ::-webkit-scrollbar {
  display: none;
} */
</style>
