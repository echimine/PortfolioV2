<template>
  <header
    class="h-[100px] flex items-center justify-center z-10 sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm"
  >
    <ul class="flex items-center justify-between w-full">
      <li>
        <NuxtLink to="/">
          <Typographie>ELIOTT CHIMINELLO</Typographie>
        </NuxtLink>
      </li>
      <li>
        <HeaderMenuDesktop />
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts"></script>
