<script setup lang="ts">
import type { Projet } from '@/type/projet.type';

const projets = ref<Projet[]>([]);

onMounted(async () => {
  const response = await fetch('/data/projets.json');
  const data = await response.json();
  projets.value = data.projets;
});
</script>
<template>
  <section
    class="w-full h-[calc(100dvh-100px)] flex flex-wrap items-center justify-center gap-10 md:gap-10 min-[1537px]:gap-40 py-10"
  >
    <div class="flex flex-col gap-4">
      <Typographie size="bodyxl">Eliott CHIMINELLO - ECHIMINE</Typographie>
      <div class="flex flex-col gap-2">
        <Typographie size="h1" as="h1" class="leading-none"
          >DEVELOPPEUR</Typographie
        >
        <Typographie size="h1" as="h1" class="leading-none">WEB</Typographie>
      </div>
      <div class="md:flex md:justify-end hidden gap-6">
        <ButtonsCTAButtons href="#a-propos">Explorer</ButtonsCTAButtons>
        <ButtonsCTAButtons href="/images/CV_Eliott_CHIMINELLO.pdf"
          >Mon CV</ButtonsCTAButtons
        >
      </div>
    </div>
    <div class="max-w-[400px] max-h-[80vh]">
      <img
        class="rounded-2xl min-w-[300px]: max-w[500px] object-contain"
        src="public/images/image-eliott.png"
        alt=""
      />
    </div>

    <div class="md:hidden flex gap-6">
      <ButtonsCTAButtons href="#a-propos">Explorer</ButtonsCTAButtons>
      <ButtonsCTAButtons href="/images/CV_Eliott_CHIMINELLO.pdf"
        >Mon CV</ButtonsCTAButtons
      >
    </div>
  </section>
  <Separator home id="a-propos" />
  <section>
    <Typographie size="h2" as="h2">MON HSITOIRE</Typographie>

    <div
      class="flex flex-col md:flex-row items-start justify-center md:justify-between md:gap-10 md:pt-10 flex-wrap"
    >
      <img
        class="py-10 md:py-0 rounded-2xl"
        src="public/images/projets/echimine/home_echimine.png"
        alt=""
      />

      <div class="flex flex-col gap-6">
        <Typographie size="bodyxl" class="text-justify md:w-3/4"
          >Moi c'est Eliott, avant de coder je faisais des edits en gros du
          montage vidéo, que je postais ensuite sur mes réseaux sociaux. J'ai
          commencé à avoir une communauté. pour la développer encore plus ma
          communauté j'ai alors utiliser un thème wordpress sur mon site car je
          n'avais pas les compétences pour le faire moi même. Tout a commencé
          avec ce site
          <NuxtLink
            to="https://www.echimine.fr/"
            class="dark:text-orange text-blue hover:underline"
          >
            echimine.fr</NuxtLink
          >. C'est ce projet qui m'a donné envie de poursuivre mes études dans
          le développement web.
        </Typographie>

        <ButtonsCTAButtons class="md:w-[300px] w-full" href="a-propos"
          >Me décrouvrir encore plus +
        </ButtonsCTAButtons>
      </div>
    </div>
  </section>
  <Separator home />
  <section class="h-full py-5">
    <Typographie size="h2" as="h2">MES DERNIERS PROJETS</Typographie>
    <div class="pt-4 flex flex-wrap justify-between gap-4">
      <Typographie size="bodyxl" as="p"
        >Découvrer mes autres projets là-bas
      </Typographie>
      <ButtonsCTAButtons class="md:w-[300px] w-full" href="projets"
        >Voir tous mes projets
      </ButtonsCTAButtons>
    </div>
    <client-only> <CardsCardProjets :projets="projets" home /></client-only>
  </section>
</template>

<style scoped></style>
