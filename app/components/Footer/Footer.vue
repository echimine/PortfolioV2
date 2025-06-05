<template>
  <footer class="h-full w-full py-10">
    <div
      class="flex md:justify-between md:items-end p-10 gap-8 md:gap-10 border-2 border-blue dark:border-orange rounded-2xl flex-wrap"
    >
      <div
        class="flex justify-center md:justify-start gap-8 items-end flex-wrap"
      >
        <img
          class="w-[200px] lg:w-[300px] rounded-lg"
          src="public/images/image-eliott.png"
          alt=""
        />
        <div>
          <Typographie size="footer" as="h1" class="leading-none"
            >Eliott</Typographie
          >
          <Typographie size="footer" as="h1" class="leading-none"
            >CHIMINELLO</Typographie
          >
        </div>
      </div>

      <div class="flex flex-col items-center md:items-end gap-8 pb-8">
        <ul class="flex gap-4 justify-center md:justify-end">
          <li>
            <NuxtLink to="/projets" :class="getLinkClass('/projets')"
              ><Typographie size="bodyxl">Projet</Typographie></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/a-propos" :class="getLinkClass('/a-propos')"
              ><Typographie size="bodyxl">A propos</Typographie></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" :class="getLinkClass('/contact')"
              ><Typographie size="bodyxl">Contact</Typographie></NuxtLink
            >
          </li>
        </ul>
        <ul class="flex gap-4 justify-end">
          <li><CardsCardSocialNetwork img="gitHub" /></li>
          <li><CardsCardSocialNetwork img="linkedin" /></li>
          <li><CardsCardSocialNetwork img="mail" /></li>
          <li><CardsCardSocialNetwork img="mail" /></li>
        </ul>
        <div class="md:pl-8">
          <Typographie> © {{ currentYear }} Tous droits réservés</Typographie>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
import { useRoute } from 'vue-router';

const route = useRoute();
const getLinkClass = (targetPath: string) => {
  return route.path === targetPath
    ? 'underline text-blue dark:text-orange font-Inter font-normal'
    : 'font-Inter font-normal dark:text-white text-black';
};
</script>

<style scoped></style>
