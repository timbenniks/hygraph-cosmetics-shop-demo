<script setup lang="ts">
const localePath = useLocalePath();
const { navigation } = await GqlNavigation();

const navigationComputed = computed(() => {
  return navigation?.page.map((p) => {
    return {
      url: localePath(`${p.__typename === "Pdp" ? "/pdp/" : "/"}${p.slug}`),
      label: p.title,
    };
  });
});
</script>

<template>
  <footer class="mx-auto max-w-screen-2xl">
    <newsletter />

    <div class="bg-dark text-light">
      <div
        class="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8"
      >
        <div class="font-bold font-title text-2xl">
          <nuxt-link to="/">skncre</nuxt-link>
        </div>

        <nav class="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
          <nuxt-link
            class="lowercase"
            v-for="page in navigationComputed"
            :key="page.label"
            :to="page.url"
            >{{ page.label }}</nuxt-link
          >
        </nav>
      </div>
    </div>
  </footer>
</template>
