<template>
  <header
    class="h-[100px] flex items-center justify-center z-10 sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm border-x-2 border-b-2 border-blue/20 dark:border-orange/20 rounded-b-lg px-2"
  >
    <ul class="flex items-center justify-between w-full">
      <li>
        <NuxtLink to="/">
          <Typographie size="bodyxl">ELIOTT CHIMINELLO</Typographie>
        </NuxtLink>
      </li>
      <li class="hidden md:block">
        <HeaderMenuDesktop />
      </li>
      <li class="block md:hidden">
        <HeaderMenuMobile />
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts"></script>


