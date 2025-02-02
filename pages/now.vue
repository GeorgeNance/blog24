<template>
  <main class="min-h-screen flex justify-center px-4 py-8">
    <div class="max-w-2xl w-full">
      <div
           class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
        <ContentDoc v-slot="{ doc }" tag="article">
          <article class="text-center">
            <h1 class="mb-1">Right now, I am</h1>
            <small class="block text-gray-600 dark:text-gray-400">Last updated: {{ getReadableDate(doc.date) }}</small>
            <div class="mt-10 text-left">
              <ContentRenderer :value="doc" />
            </div>
            <a href="https://nownownow.com/about"
               class="inline-block mt-8 text-sm text-gray-600 dark:text-gray-400 hover:underline">
              What's a Now Page?
            </a>
          </article>
        </ContentDoc>
      </div>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "George Nance",
});


defineOgImageComponent('BlogPost', {
  title: "Now",
  description: "Right now, I am",
})

const getReadableDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
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