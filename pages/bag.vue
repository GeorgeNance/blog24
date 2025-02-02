<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="What's in my bag?" :description="description" />

  </main>
</template>

<script setup>
const description =
  "Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.";
useSeoMeta({
  title: "Things I use",
  description,
});



</script>
