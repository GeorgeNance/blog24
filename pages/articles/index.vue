<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <div v-for="year in sortedYears" :key="year" class="mb-16">
      <h2 class="text-2xl font-bold mb-4">{{ year }}</h2>
      <ul class="space-y-16">
        <li v-for="(article, id) in groupedArticles[year]" :key="article._path">
          <AppArticleCard :article="article" :delay-animation="id * 100" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const description =
  "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";
useSeoMeta({
  title: "Articles",
  description,
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles")
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find()
);

const groupedArticles = computed(() => {
  if (!articles.value) return {};

  return articles.value.reduce((acc, article) => {
    const year = new Date(article.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(article);
    return acc;
  }, {});
});

// Add a new computed property for sorted years
const sortedYears = computed(() => {
  return Object.keys(groupedArticles.value)
    .map(Number)
    .sort((a, b) => b - a);
});
</script>
