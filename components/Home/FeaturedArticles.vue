<template>
  <div>
    <h2 class="uppercase text-xs font-semibold dark:text-gray-300 text-gray-500 mb-6">
      RECENT ARTICLES
    </h2>
    <ul class="space-y-8">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <NuxtLink label="All Articles &rarr;" to="/articles" variant="link" color="gray" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("featured-articles", () =>
  queryCollection("article")
    .order('date', 'DESC')
    .where('draft', '=', 0)
    .limit(3)
    .all()
);
</script>
