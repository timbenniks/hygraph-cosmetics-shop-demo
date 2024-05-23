<script setup>
const route = useRoute();
const { slug } = route.params;
const { locale } = useI18n();
const page = await usePage({
  slug,
  type: "page",
  locale: locale.value,
});
useOgtags(page);
</script>

<template>
  <template>
    <RenderPage :data="page" />
  </template>
</template>
