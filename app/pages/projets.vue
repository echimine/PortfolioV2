<template>
  <main>
    <Typographie size="h1" as="h1">Projets</Typographie>
    <Typographie size="bodybase" as="p">
      Découvrez mes projets, utilisez les filtres pour trier les projets.
    </Typographie>

    <!-- Vérifie si les projets existent et sont bien dans un tableau -->
    <section
      v-if="projets && projets.length > 0"
      v-for="projet in projets"
      :key="projet.id"
    >
      <Typographie size="bodybase">{{ projet.title }}</Typographie>
    </section>

    <p class="flex justify-center items-center" v-else>
      Chargement des projets...
    </p>
  </main>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';

// Récupère les données et accède à la clé `projets`
const { data: projetsData } = await useAsyncData('projets', () =>
  $fetch('/api/projets')
);

// Accède à la clé `projets` dans la référence réactive
const projets = projetsData?.value?.projets ?? [];

console.log(projets); // Vérifie la structure des données
</script>
