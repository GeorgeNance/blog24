<template>
	<main class="min-h-screen">
		<AppHeader class="mb-12" title="Tags" :description="description" />
		<div class="space-y-4">
			<ul v-for="(tag, tagCount) in tagCount">
				<li>
					<NuxtLink :to="`/tags/${tag.tag}`"
							  class="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-cyan-500">
						{{ tag.tag }}
					</NuxtLink>
					<span class=" ml-2 text-gray-500 dark:text-gray-400">({{ tag.count }})</span>
				</li>

			</ul>
		</div>
	</main>
</template>

<script setup>
const description =
	"Tags for all of my articles. Here's a list of all the tags I've used.";
useSeoMeta({
	title: "Tags",
	description,
});
const { data: articles } = await useAsyncData("all-articles", () =>
	queryContent("articles").find()
);


// Remove Articles with no tags
const articlesWithTags = articles.value.filter((article) => article.tags !== undefined && article.tags.length > 0);


// Get Tags
const tags = articlesWithTags
	.map((article) => article.tags)
	.flat()
	.filter((tag, index, self) => self.indexOf(tag) === index)
	.filter((tag) => tag !== undefined)
	.sort();
// Get Count of articles for each tag
const tagCount = tags.map((tag) => {
	const count = articlesWithTags.filter((article) => article.tags.includes(tag)).length;
	return { tag, count };
});



</script>
