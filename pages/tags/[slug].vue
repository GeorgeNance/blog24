<template>
	<main class="min-h-screen">
		<AppHeader class="mb-16" :title="`${tag} articles`" :description="description" />
		<ul class="space-y-16">
			<li v-for="(article, id) in articles" :key="id">
				<AppArticleCard :article="article" :delay-animation="id * 100" />
			</li>
		</ul>
	</main>
</template>

<script setup>
const description =
	"All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";


// Get Tag from route
const { slug } = useRoute().params;
console.log(slug);

// Upper case first letter
const tag = slug.charAt(0).toUpperCase() + slug.slice(1);


useSeoMeta({
	title: tag,
	description,
});

const { data: articles } = await useAsyncData(`${slug}-articles`, () =>
	queryContent("/articles")
		.where({ 'tags': { $contains: slug } })
		.sort({ date: -1 }).find()
);
</script>
