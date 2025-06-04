<template>
  <section
    v-if="projets && projets.length > 0"
    class="flex justify-center md:justify-start"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-14 pt-10">
      <article
        v-for="(projet, index) in projets"
        :key="projet.id"
        class="relative flex flex-col lg:max-w-[800px] lg:max-h-[530px] items-center gap-10 pt-10 flex-wrap"
      >
        <!-- Séparateur vertical (droite), uniquement pour colonne 1 et 2 -->
        <div
          v-if="index % 3 !== 2"
          class="absolute top-0 right-[-28px] h-full w-[1px] bg-black dark:bg-white"
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
            <Typographie size="h3" weight="medium" as="h3">{{
              projet.title
            }}</Typographie>
            <Typographie size="bodybase">{{ projet.description }}</Typographie>
          </div>

          <div>
            <NuxtLink :to="`/projet/${projet.id}`">
              <ButtonsCTAButtons type="button"
                >Voir le projet</ButtonsCTAButtons
              >
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
import { ref, onMounted } from 'vue';

// Typages
interface ProjetImage {
  image: string;
  alt: string;
}

interface ProjetParagraphe {
  paragraphe: string;
}

interface ProjetLink {
  linksite: string;
  linkname: string;
}

interface ProjetTechnologie {
  technologie: string;
}

interface ProjetCompetence {
  competence: string;
}

interface Projet {
  id: number;
  title: string;
  date: string;
  text: string;
  description: string;
  image: string;
  images: ProjetImage[];
  paragraphes: ProjetParagraphe[];
  links: ProjetLink[];
  technologies: ProjetTechnologie[];
  competences: ProjetCompetence[];
}

// On déclare les variables réactives
const projets = ref<Projet[]>([]);
const error = ref<Error | null>(null);

// Fetch des données seulement au montage du composant (client side)
onMounted(async () => {
  try {
    const response = await fetch('/data/projets.json');
    if (!response.ok)
      throw new Error('Erreur lors du chargement du fichier JSON');

    const data = await response.json();

    if (data.projets && Array.isArray(data.projets)) {
      projets.value = data.projets;
    } else {
      throw new Error(
        'La clé "projets" est absente ou invalide dans le fichier JSON'
      );
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
      console.error(err.message);
    } else {
      error.value = new Error('Erreur inconnue');
      console.error('Erreur inconnue');
    }
  }
});
</script>
