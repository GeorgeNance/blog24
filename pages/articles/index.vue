<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <div v-for="(articles, year) in groupedArticles" :key="year" class="mb-16">
      <h2 class="text-2xl font-bold mb-4">{{ year }}</h2>
      <ul class="space-y-16">
        <li v-for="(article, id) in articles" :key="id">
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
    .sort({ date: -1 }).find()
);

// Ensure articles is reactive and initialized as an array
const articlesRef = ref(articles || []);

// Group articles by year using a computed property
const groupedArticles = computed(() => {
  const grouped = articlesRef.value.reduce((acc, article) => {
    const year = new Date(article.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(article);
    return acc;
  }, {});

  // Sort years in descending order
  return Object.keys(grouped)
    .sort((a, b) => a - b)
    .reduce((acc, year) => {
      acc[year] = grouped[year];
      return acc;
    }, {});
});
</script>
