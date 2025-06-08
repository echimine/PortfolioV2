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
    <Typographie size="h2" as="h2">MON HISTOIRE</Typographie>

    <div
      class="flex flex-col md:flex-row items-start justify-center md:justify-between md:gap-10 md:pt-10 flex-wrap"
    >
      <img
        class="py-10 md:py-0 rounded-2xl"
        src="public/images/projets/echimine/home_echimine.png"
        alt="rubrique starwars du site chimine.fr"
      />

      <div class="flex flex-col gap-6">
        <Typographie size="bodyxl" class="text-justify md:w-3/4"
          >Moi c’est Eliott. Avant de me lancer dans le code, je faisais du
          montage vidéo, des edits que je partageais sur mes réseaux sociaux.
          Petit à petit, j’ai commencé à créer une communauté autour de ces
          contenus. Pour aller plus loin et la faire grandir, j’ai décidé de
          créer un site web. Ne maîtrisant pas encore le développement, j’ai
          utilisé un thème WordPress. C’est à ce moment-là que tout a commencé :
          <NuxtLink
            to="https://www.echimine.fr/"
            class="dark:text-orange text-blue hover:underline"
          >
            echimine.fr</NuxtLink
          >
          ce site a été le point de départ de mon envie d’apprendre à coder.
        </Typographie>

        <ButtonsCTAButtons class="md:w-[300px] w-full" href="a-propos"
          >En savoir plus
        </ButtonsCTAButtons>
      </div>
    </div>
  </section>
  <Separator home />
  <section class="h-full py-5">
    <Typographie size="h2" as="h2">MES DERNIERS PROJETS</Typographie>
    <div class="pt-4 md:flex flex-wrap justify-between gap-4 hidden">
      <Typographie size="bodyxl" as="p"
        >Découvrer mes autres projets
      </Typographie>
      <ButtonsCTAButtons plein class="md:w-[300px] w-full" href="projets"
        >Découvrir tous mes projets
      </ButtonsCTAButtons>
    </div>
    <client-only> <CardsCardProjets :projets="projets" home /></client-only>
    <div class="pt-4 flex flex-wrap justify-between gap-4 md:hidden">
      <Typographie size="bodyxl" as="p"
        >Découvrer mes autres projets
      </Typographie>
      <ButtonsCTAButtons plein class="md:w-[300px] w-full" href="projets"
        >Découvrir tous mes projets
      </ButtonsCTAButtons>
    </div>
  </section>
</template>

<style scoped></style>
