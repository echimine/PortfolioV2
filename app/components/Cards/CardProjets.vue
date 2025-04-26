<template>
  <section
    v-if="projets && projets.length > 0"
    v-for="projet in projets"
    :key="projet.id"
  >
    <article class="flex items-center gap-10 py-10 flex-wrap md:flex-nowrap">
      <img
        :src="projet.image"
        :alt="`image de couverture du projet ${projet.title}`"
        :title="`image de couverture du projet ${projet.title}`"
        class="w-full md:w-96 rounded-lg"
      />

      <div
        class="flex flex-wrap md:flex-col items-center md:items-start justify-between gap-4 lg:gap-10 w-full"
      >
        <div class="flex flex-col gap-4">
          <Typographie size="h3" weight="medium" as="h3">{{
            projet.title
          }}</Typographie>
          <Typographie size="bodybase">{{ projet.description }}</Typographie>
        </div>

        <div>
          <NuxtLink :to="`/projet/${projet.id}`"
            ><ButtonsCTAButtons type="button"
              >Voir le projet</ButtonsCTAButtons
            ></NuxtLink
          >
        </div>
      </div>
    </article>
    <Separator />
  </section>

  <p class="flex justify-center items-center" v-else>
    <Typographie size="h1" as="h1">Chargement des projets...</Typographie>
  </p>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';

// Récupère les données et accède à la clé `projets`
const { data: projetsData } = await useAsyncData('projets', () =>
  $fetch('/api/projets')
);

// Accède à la clé `projets` dans la référence réactive
const projets = projetsData?.value?.projets ?? [];
</script>
