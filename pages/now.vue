<template>
	<main class="">
	  <div
		class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
	  >
		<ContentDoc v-slot="{ doc }" tag="article">
		  <article>
			<h1 class="mb-1">Right now, I am</h1>
			<small class="text-center">Updated: {{getReadableDate(doc.date)}}</small>
			  <div class="mt-10">
        <ContentRenderer :value="doc" />
        </div>  
		  </article>
		</ContentDoc>
	  </div>
	</main>
  </template>
  <script setup>
  const route = useRoute();
  const { slug } = route.params;
  useSeoMeta({
	ogImage: `https://fayazahmed.com/articles/${slug}.png`,
	twitterCard: "summary_large_image",
	articleAuthor: "George Nance",
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
  <style>
  .prose h2 a,
  .prose h3 a {
	@apply no-underline;
  }
  </style>
  