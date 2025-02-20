import { useAsyncData, createError, queryCollection } from '#imports'

export default defineNuxtRouteMiddleware(async (to) => {
	// Only check article routes
	if (!to.path.startsWith('/articles/')) {
		return;
	}

	const slug = to.params.slug;
	if (!slug) return;

	// Query the article
	const { data: article } = await useAsyncData(`article-${slug}`, () => {
		let query = queryCollection('article')
			.where('slug', '=', slug);

		// Only filter by published in production
		if (!import.meta.dev) {
			query = query.where('published', '=', true);
		}

		return query.first();
	});

	// If article doesn't exist, redirect to 404
	if (!article.value) {
		throw createError({
			statusCode: 404,
			message: 'Article not found'
		});
	}
}); 