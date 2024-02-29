<template>
  <div>
    <main class="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <ContentDoc v-slot="{ doc }" tag="article">

          <article class="w-full">
            <h1 class="text-5xl dark:text-white font-h1 font-bold mb-4">{{ doc.title }}</h1>
            <div class=" text-gray-600 dark:text-gray-500">
              Published on
              <time class="" :datetime="doc.date">{{ getReadableDate(doc.date) }}</time>
              <span class="mx-2">❖</span>
              <span v-if="doc.readingTime">{{ doc.readingTime.text }}</span>
              <span v-for="(tag, index) in doc.tags" :key="index">
                <NuxtLink :to="`/tags/${tag}`" class=" ml-2 text-cyan-500 hover:underline">#{{ tag }}</NuxtLink>
              </span>
            </div>
            <div class="grid grid-cols-4 gap-4 grid-flow-col w-full mt-10">

              <div class="md:col-span-3 col-span-4">
                <ContentRenderer :value="doc"
                                 class="article-body prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg  "
                                 ref="articleBody" />
              </div>
              <aside class="col-span-1 hidden md:flex md:flex-col" v-if="doc.body.toc.links.length > 2">
                <AppTableOfContents :toc="doc.body.toc" />
              </aside>
            </div>
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
