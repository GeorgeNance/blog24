<template>
  <main class="min-h-screen">
    <div
      class="prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg  "
    >
      <ContentDoc v-slot="{ doc }" tag="article">

        <article>
          <h1>{{ doc.title }}</h1>
          <div class=" text-gray-600 dark:text-gray-500">
            Published on
            <time class="" :datetime="doc.date">{{ getReadableDate(doc.date) }}</time>
            <span class="mx-2">❖</span>
            <span v-if="doc.readingTime">{{ doc.readingTime.text }}</span>
          </div>

          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;

const { page } = useContent()

let article = page.value;
useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "George Nance",
});

defineOgImageComponent('NuxtSeo', {
  title: article.title,
  description: article.description,
  // theme: '#ff0000',
  colorMode: 'dark',

})



const getReadableDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
