<script setup>
defineProps(["reviews"]);
</script>

<template>
  <section class="bg-tertiary">
    <div class="px-12 py-24 md:px-16 md:py-12">
      <h1 class="text-4xl font-bold mb-12 text-dark">reviews</h1>

      <ul>
        <li
          v-for="review in reviews"
          :key="review.id"
          class="mb-8 max-w-screen-md border-b border-b-secondary pb-8"
        >
          <h3 class="text-primary text-lg font-bold mb-2">
            {{ review.name }} ({{ review.rating }}/5)
          </h3>
          <p>{{ review.comment }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
