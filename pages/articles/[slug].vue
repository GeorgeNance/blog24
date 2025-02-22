<template>
  <div v-if="post" class="mb-32">
    <main class="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="relative flex items-start">
        <div class="flex-grow">
          <div class="max-w-3xl mx-auto">
            <article class="w-full font-serif">
              <div v-if="post.published === false" class="bg-yellow-100 text-yellow-800 rounded-lg p-4 mb-6">
                This article is not published yet.
              </div>
              <h1 class="text-4xl sm:text-5xl dark:text-white font-h1 font-bold mb-6 mt-0 leading-tight">{{ post.title
                }}</h1>
              <div class="space-y-4">
                <div class="text-gray-600 dark:text-gray-500 text-lg">By George Nance</div>
                <div class="text-gray-600 dark:text-gray-500 flex flex-wrap gap-2 items-center text-base">
                  <span>Published on</span>
                  <time class="font-medium" :datetime="post.date">{{ getReadableDate(post.date) }}</time>
                  <span class="mx-2 opacity-60">❖</span>
                  <span v-if="post.meta?.readingTime" class="font-medium">{{ post.meta.readingTime.text }}</span>
                </div>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span v-for="(tag, index) in post.tags" :key="index">
                    <NuxtLink :to="`/tags/${tag}`"
                              class="text-cyan-500 hover:underline hover:text-cyan-600 transition-colors text-sm font-medium">
                      #{{ tag }}</NuxtLink>
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div class="max-w-3xl mx-auto w-full mt-12">
            <ContentRenderer v-if="post" :value="post"
                             class="article-body prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg mx-auto prose-headings:scroll-mt-24"
                             ref="articleBody" />
          </div>
        </div>

        <aside v-if="!post.hide_toc && post.body?.toc?.links?.length > 2" class="hidden lg:block sticky top-32 ml-12"
               style="width: 280px; height: fit-content;">
          <AppTableOfContents :toc="post.body.toc" />
        </aside>
      </div>
    </main>
    <div class="mt-32 text-center space-y-6">
      <p class="text-lg text-gray-600 dark:text-gray-400">Thank you for reading! If you got any value from this, please
        share it 😌</p>
      <HomeSocialLinks class="mt-4" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const slug = route.params.slug;

// Fetch the article
const { data: post } = await useAsyncData(`article-${slug}`, () => {
  let query = queryCollection('article')
    .where('slug', '=', slug);

  // Only filter by published in production
  if (!import.meta.dev) {
    query = query.where('published', '=', true);
  }

  return query.first();
});

// Handle 404 if article not found or not published
if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Article not found'
  });
}



// Only set meta tags if we have post data
if (post.value) {
  useSeoMeta({
    title: post.value.title,
    description: post.value.description,
    twitterCard: "summary_large_image",
    articleAuthor: "George Nance",
    articlePublishedTime: post.value.date,
    twitterDescription: post.value.description,
  });

  if (post.value.ogImage) {
    defineOgImage(`${post.value.ogImage}`)
  } else {
    defineOgImageComponent('BlogPost', {
      title: post.value.title,
      subTitle: post.value.description,
    })
  }
}

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
