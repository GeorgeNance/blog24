<template>
  <div>
    <main class="min-h-screen">
      <div
           class="prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg  ">
        <ContentDoc v-slot="{ doc }" tag="article">

          <article>
            <h1>{{ doc.title }}</h1>
            <div class=" text-gray-600 dark:text-gray-500">
              Published on
              <time class="" :datetime="doc.date">{{ getReadableDate(doc.date) }}</time>
              <span class="mx-2">❖</span>
              <span v-if="doc.readingTime">{{ doc.readingTime.text }}</span>
              <span v-for="(tag, index) in doc.tags" :key="index">
                <NuxtLink :to="`/tags/${tag}`" class=" ml-2 text-cyan-500 hover:underline">#{{ tag }}</NuxtLink>
              </span>
            </div>

            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </div>
    </main>
    <div class="mt-32  text-center">
      <p> Thank you for reading! If you got any value from this, please share it 😌</p>
      <HomeSocialLinks class="mt-4" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;


useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "George Nance",
});

defineOgImageComponent('NuxtSeo', {
  title: 'Hello OG Image 👋',
  description: 'Look what at me in dark mode',
  theme: '#ff0000',
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
