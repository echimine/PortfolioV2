<template>
  <section v-if="projets && projets.length > 0">
    <article
      v-for="projet in projets"
      :key="projet.id"
      class="flex items-center gap-10 py-10 flex-wrap md:flex-nowrap"
    >
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
          <NuxtLink :to="`/projet/${projet.id}`">
            <ButtonsCTAButtons type="button">
              Voir le projet
            </ButtonsCTAButtons>
          </NuxtLink>
        </div>
      </div>
    </article>
    <Separator />
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
