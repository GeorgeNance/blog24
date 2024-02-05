<template>
  <NuxtLink :to="article._path" class="group">
    <article>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
      >
        {{ article.title }}
      </h2>

      <!-- Read Time -->

      <p class="relative z-10 text-sm text-gray-600 dark:text-gray-400">
        <span
        class="relative z-10 text-sm text-gray-600 dark:text-gray-400" v-if="article.readingTime">
        {{ article.readingTime.text }}
      </span>
        <span class="px-2">❖</span>
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const getReadableDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>