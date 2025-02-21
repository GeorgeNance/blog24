<template>
	<div v-if="page" class="mb-32">
		<main class="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative flex items-start">
				<div class="flex-grow">
					<div class="max-w-3xl mx-auto">
						<article class="w-full font-serif">
							<h1 class="text-5xl dark:text-white font-h1 font-bold mb-8 mt-6 leading-tight">{{ page.title
							}}</h1>
							<div v-if="page.date" class="text-gray-600 dark:text-gray-500">
								Last updated: {{ getReadableDate(page.date) }}
							</div>
						</article>
					</div>

					<div class="max-w-3xl mx-auto w-full mt-10">
						<ContentRenderer :value="page"
										 class="article-body prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg mx-auto" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
interface PageData {
	title: string;
	description?: string;
	date?: string;
}

const route = useRoute()
const { data: page } = await useAsyncData<PageData>(route.path, () => {
	return queryCollection('page').path(route.path).first()
})

// Handle 404 if page not found
if (!page.value) {
	throw createError({
		statusCode: 404,
		message: 'Page not found'
	})
}

// Set meta tags if we have page data
if (page.value) {
	useSeoMeta({
		title: page.value.title,
		description: page.value.description,
	})
}

const getReadableDate = (dateString: string): string => {
	const date = new Date(dateString)
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}
</script>

<style>
.prose h2 a,
.prose h3 a {
	@apply no-underline;
}
</style>
