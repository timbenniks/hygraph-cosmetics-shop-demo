<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
  <header class="bg-dark text-light mx-auto max-w-screen-2xl">
    <div
      class="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8"
    >
      <nuxt-link class="flex space-x-2" :to="localePath('/')">
        <span class="font-bold font-title text-3xl self-end">skncre</span>
      </nuxt-link>
      <nav class="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
        <nuxt-link :to="localePath('/pdp/face-serum')">face serum</nuxt-link>
        <nuxt-link :to="localePath('/pdp/face-cream')">face cream</nuxt-link>
        <nuxt-link :to="localePath('/pdp/eye-contour')">eye contour</nuxt-link>
        <nuxt-link :to="localePath('/pdp/bundle')">skncre bundle</nuxt-link>
      </nav>
    </div>
  </header>
</template>
