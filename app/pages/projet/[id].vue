<template>
  <section v-if="projet">
    <div class="mb-10">
      <div class="flex flex-wrap items-center justify-between">
        <Typographie size="h1" as="h1">{{ projet.title }}</Typographie>
        <Typographie size="h4" weight="medium" as="h4" class="opacity-45">{{
          projet.date
        }}</Typographie>
      </div>
      <div class="lg:w-3/4 mt-10">
        <Typographie size="bodyxl">{{ projet.text }}</Typographie>
      </div>
    </div>

    <div class="lg:w-3/4 rounded-2xl py-10 mb-8">
      <Typographie size="h3" as="h3">Détail du projet</Typographie>
      <div class="flex flex-col gap-6 pt-6">
        <div class="flex justify-between flex-wrap">
          <div><Typographie>Technologies</Typographie></div>
          <div class="flex gap-2 flex-wrap">
            <Typographie v-for="tech in projet.technologies">{{
              tech.technologie
            }}</Typographie>
          </div>
        </div>
        <Separator />
        <div class="flex justify-between flex-wrap">
          <div><Typographie>Compétences</Typographie></div>
          <div class="flex gap-2 flex-wrap">
            <Typographie v-for="competences in projet.competences">{{
              competences.competence
            }}</Typographie>
          </div>
        </div>
        <Separator />
        <div class="flex justify-between flex-wrap">
          <div><Typographie>Visiter</Typographie></div>
          <div class="flex gap-2">
            <div class="" v-for="Visites in projet.links">
              <ButtonsCTAButtons
                ><NuxtLink target="_blank" :to="Visites.linksite">{{
                  Visites.linkname
                }}</NuxtLink></ButtonsCTAButtons
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <Typographie class="py-6" size="h3" as="h3">A propos du projet</Typographie>
    <div class="mb-4 lg:w-3/4" v-for="paragraphes in projet.paragraphes">
      <Typographie>{{ paragraphes.paragraphe }}</Typographie>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      <NuxtImg
        v-for="image in projet.images"
        :key="image.image"
        :src="image.image"
        :alt="image.alt"
        :title="image.alt"
        class="rounded-2xl object-cover w-full h-auto"
      />
    </div>
  </section>

  <div v-else>
    <p>Projet non trouvé</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const projetId = route.params.id;

// Tu récupères tous les projets depuis l’API
const { data: projets, error } = await useFetch('/api/projets');

// Et tu filtres seulement celui qui t’intéresse avec computed
const projet = computed(() => {
  return projets.value?.projets.find((p) => String(p.id) === String(projetId));
});
</script>
