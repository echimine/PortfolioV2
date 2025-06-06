<!-- components/GridProjets.vue -->
<template>
  <section
    v-if="projetsAfficher && projetsAfficher.length > 0"
    class="flex justify-center md:justify-start"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 md:pt-10 gap-x-14"
    >
      <article
        v-for="(projet, index) in projetsAfficher"
        :key="projet.id"
        class="relative flex flex-col lg:max-w-[800px] lg:max-h-[560px] xl:max-h-full items-center gap-10 pt-10 flex-wrap"
      >
        <div
          v-if="shouldShowSeparator(index)"
          class="absolute top-0 right-[-28px] h-full w-[1px] bg-black dark:bg-white hidden lg:block"
        ></div>

        <img
          :src="projet.image"
          :alt="`image de couverture du projet ${projet.title}`"
          :title="`image de couverture du projet ${projet.title}`"
          class="w-full rounded-lg"
        />

        <div
          class="flex flex-wrap items-center justify-between gap-4 lg:gap-10 px-4 w-full"
        >
          <div class="flex flex-col gap-4">
            <Typographie size="h3" weight="medium" as="h3">
              {{ projet.title }}
            </Typographie>
            <Typographie size="bodybase">
              {{ projet.description }}
            </Typographie>
          </div>

          <div>
            <NuxtLink :to="`/projet/${projet.id}`">
              <ButtonsCTAButtons type="button">
                Voir le projet
              </ButtonsCTAButtons>
            </NuxtLink>
          </div>
        </div>

        <div class="h-[1px] bg-black dark:bg-white w-full"></div>
      </article>
    </div>
  </section>

  <p v-else class="flex justify-center items-center min-h-screen">
    <Typographie size="h1" as="h1">Chargement des projets...</Typographie>
  </p>
</template>

<script setup lang="ts">
import type { Projet } from '@/type/projet.type';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps<{
  projets: Projet[];
  home?: boolean;
}>();

// Responsive : détection de la taille de l’écran
const windowWidth = ref(0);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

// Déterminer combien de colonnes sont visibles
const getColumnCount = computed(() => {
  if (windowWidth.value >= 1536) return 3;
  if (windowWidth.value >= 1024) return 2;
  return 1;
});

// Affiche un séparateur sauf pour la dernière colonne
function shouldShowSeparator(index: number) {
  const columns = getColumnCount.value;
  return columns > 1 && index % columns !== columns - 1;
}

// Afficher seulement 3 projets en home
const projetsAfficher = computed(() =>
  props.home ? props.projets.slice(0, 3) : props.projets
);
</script>
