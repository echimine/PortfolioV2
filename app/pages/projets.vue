<template>
  <main class="py-16">
    <Typographie size="h1" as="h1">MES PROJETS</Typographie>
    <Typographie size="bodyxl" as="h2" class="mb-4">
      Découvrez mes projets
    </Typographie>
    <Separator />
    <client-only>
      <CardsCardProjets :projets="projets" />
    </client-only>
  </main>
</template>

<script setup lang="ts">
import type { Projet } from '@/type/projet.type';

const projets = ref<Projet[]>([]);

onMounted(async () => {
  const response = await fetch('/data/projets.json');
  const data = await response.json();
  projets.value = data.projets;
});
</script>
