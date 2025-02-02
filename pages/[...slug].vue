<template>
	<main class="w-full mx-auto px-4 sm:px-6 lg:px-8">
		<ContentRenderer v-if="page" :value="page"
						 class="article-body prose prose-lg dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg  " />
	</main>
</template>




<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('page').path(route.path).first()
})
</script>
