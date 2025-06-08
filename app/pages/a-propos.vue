<template>
  <section class="pt-16">
    <Typographie size="h1" as="h1">A PROPOS</Typographie>
    <div class="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 2xlpx-40">
      <!-- Image -->

      <img
        src="public/images/P1000884_1.jpg"
        alt="Image de présentation"
        class="rounded-2xl w-full hover:grayscale transition duration-300"
      />

      <!-- Texte -->
      <div class="w-full flex flex-col gap-10">
        <Typographie>
          Passionné par le web et la création numérique, je suis actuellement
          étudiant en DN MADE mention développement web à L'École by CCI à
          Annecy. Curieux, rigoureux et toujours à l’écoute, j’ai à cœur de
          développer des expériences interactives qui allient esthétique et
          performance. Mon parcours mêle design, code et une bonne dose de
          créativité.
        </Typographie>

        <Typographie>
          En dehors je ne fais pas que coder, je pars faire du vélo soit autour
          d'Annecy, soit en Savoie. Cela me permet de découvrir de nouveaux
          paysages, mais aussi de faire des rencontres et aussi de me dépenser
          en prenant du plaisir ;)
        </Typographie>
        <div class="flex flex-col gap-2">
          <img
            src="public/images/velo-meribel-col-de-la-loze.jpg"
            alt="velo posez sur une table au col de la Loze à Meribel en savoie"
            class="rounded-2xl"
          />
          <Typographie class="italic opacity-50"
            >Sortie vélo au col de la Loze à Méribel</Typographie
          >
        </div>

        <Typographie>
          Mon objectif : continuer à monter en compétence en travaillant avec
          des équipes inspirantes, sur des projets concrets.
        </Typographie>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
