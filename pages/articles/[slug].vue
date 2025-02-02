<template>
  <div>
    <main class="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <!-- <pre>
            {{ post }}
          </pre> -->
        <article class="w-full">
          <h1 class="text-5xl dark:text-white font-h1 font-bold mb-4">{{ post.title }}</h1>
          <div class=" text-gray-600 dark:text-gray-500">
            Published on
            <time class="" :datetime="post.date">{{ getReadableDate(post.date) }}</time>
            <span class="mx-2">❖</span>
            <span v-if="post.meta.readingTime">{{ post.meta.readingTime.text }}</span>
            <span v-for="(tag, index) in post.tags" :key="index">
              <NuxtLink :to="`/tags/${tag}`" class=" ml-2 text-cyan-500 hover:underline">#{{ tag }}</NuxtLink>
            </span>
          </div>
          <div class="grid grid-cols-4 gap-4 grid-flow-col w-full mt-10">

            <div class="md:col-span-3 col-span-4">
              <ContentRenderer :value="post"
                               class="article-body prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg  "
                               ref="articleBody" />
            </div>
            <aside class="col-span-1 hidden md:flex md:flex-col" v-if="post.body.toc.links.length > 2">
              <AppTableOfContents :toc="post.body.toc" />
            </aside>
          </div>
        </article>
      </div>
    </main>
    <div class="mt-32  text-center">
      <p> Thank you for reading! If you got any value from this, please share it 😌</p>
      <HomeSocialLinks class="mt-4" />
    </div>
  </div>
</template>
<script setup>
const slug = useRoute().params.slug
// Grab the article from the content module
const { data: post } = await useAsyncData(`article-${slug}`, () => {
  return queryCollection('article').where('slug', '=', slug).first()
})


useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "George Nance",
  articlePublishedTime: post.date,
  twitterDescription: post.description,
});



if (post?.ogImage) {
  defineOgImage(`${post.ogImage}`)
} else {
  defineOgImageComponent('BlogPost', {
    title: post.title,
    description: post.description,
  })
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
