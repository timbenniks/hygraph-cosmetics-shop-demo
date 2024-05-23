<script setup lang="ts">
const { locale } = useI18n();

const page = await usePage({
  slug: "home",
  type: "page",
  locale: locale.value,
});
useOgtags(page);
</script>

<template>
  <RenderPage :data="page" />
</template>
