<template>
  <!-- Chargement du projet -->
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <Spinner />
  </div>

  <!-- Si le projet n'existe pas après le chargement -->
  <div
    v-else-if="!projet"
    class="flex justify-center items-center min-h-screen"
  >
    <Typographie size="h1" as="h1">Projet non trouvé</Typographie>
  </div>
  <section v-else>
    <div class="mb-10">
      <div class="flex flex-wrap items-center justify-between">
        <Typographie size="h1" as="h1">{{ projet.title }}</Typographie>
        <Typographie size="h4" weight="medium" as="h4" class="opacity-45">
          {{ projet.date }}
        </Typographie>
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
            <Typographie
              v-for="tech in projet.technologies"
              :key="tech.technologie"
            >
              {{ tech.technologie }}
            </Typographie>
          </div>
        </div>
        <Separator />
        <div class="flex justify-between flex-wrap">
          <div><Typographie>Compétences</Typographie></div>
          <div class="flex gap-2 flex-wrap">
            <Typographie
              v-for="competence in projet.competences"
              :key="competence.competence"
            >
              {{ competence.competence }}
            </Typographie>
          </div>
        </div>
        <Separator />
        <div class="flex justify-between flex-wrap">
          <div><Typographie>Visiter</Typographie></div>
          <div class="flex gap-2">
            <div v-for="visite in projet.links" :key="visite.linksite">
              <ButtonsCTAButtons>
                <NuxtLink target="_blank" :to="visite.linksite">
                  {{ visite.linkname }}
                </NuxtLink>
              </ButtonsCTAButtons>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Typographie class="py-6" size="h3" as="h3">A propos du projet</Typographie>
    <div
      v-for="paragraphe in projet.paragraphes"
      :key="paragraphe.paragraphe"
      class="mb-4 lg:w-3/4"
    >
      <Typographie>{{ paragraphe.paragraphe }}</Typographie>
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

  <div
    v-if="!projet && !isLoading"
    class="flex justify-center items-center min-h-screen"
  >
    <Typographie size="h1" as="h1">Chargement du projet...</Typographie>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

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
const isLoading = ref(true);
// Variables réactives
const route = useRoute();
const projetId = ref(route.params.id);

const projets = ref<Projet[]>([]);
const error = ref<Error | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('/data/projets.json');
    if (!response.ok) throw new Error('Erreur lors du chargement des projets.');

    const data = await response.json();
    if (data.projets && Array.isArray(data.projets)) {
      projets.value = data.projets;
    } else {
      throw new Error('Format des données de projets invalide.');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
      console.error(err.message);
    } else {
      error.value = new Error('Erreur inconnue');
      console.error('Erreur inconnue');
    }
  } finally {
    // Petit délai pour simuler le "chargement"
    setTimeout(() => {
      isLoading.value = false;
    }, 3000); // 3 secondes
  }
});

// Computed pour trouver le bon projet
const projet = computed(() => {
  return projets.value.find((p) => String(p.id) === String(projetId.value));
});

watch(
  () => route.params.id,
  async (newId) => {
    projetId.value = newId; // Mise à jour de l'ID
    isLoading.value = true; // On redémarre le chargement
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simule le chargement 3 sec
    isLoading.value = false;
  }
);
</script>
