<template>
  <main>
    <Typographie size="h1" as="h1">Projets</Typographie>
    <Typographie size="bodybase" as="p" class="mb-4">
      Découvrez mes projets
    </Typographie>
    <Separator />
    <client-only>
      <CardsCardProjets />
    </client-only>
  </main>
</template>

<script setup lang="ts"></script>
