<script setup lang="ts">
const email = ref("");
const success = ref("");

async function subscribe() {
  if (!email.value) {
    return;
  }

  await useFetch("/api/subscribe", {
    query: { email: email.value },
  });

  success.value = "Thanks for subscribing";
}
</script>

<template>
  <div class="w-full bg-tertiary p-4">
    <template v-if="success !== ''">
      <p>{{ success }}</p>
    </template>
    <template v-else>
      <div class="flex space-x-4">
        <input
          id="newsletter"
          v-model="email"
          type="email"
          required
          class="px-4 py-1 text-primary placeholder:text-primary border border-primary"
          placeholder="Subscribe to newsletter"
        />
        <button class="cta" @click="subscribe()">Go</button>
      </div>
    </template>
  </div>
</template>
