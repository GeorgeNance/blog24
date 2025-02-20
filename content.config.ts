import { defineCollection, z } from '@nuxt/content'
// import { asOgImageCollection } from 'nuxt-og-image/content'

export default {
	collections: {

		article: defineCollection({
			type: 'page',
			source: 'articles/**/*.md',
			schema: z.object({
				title: z.string(),
				description: z.string(),
				ogImage: z.string().optional(),
				slug: z.string(),
				date: z.date(),
				tags: z.array(z.string()),
				published: z.boolean(),
				archived: z.boolean().optional(),
				updatedAt: z.date().optional(),
			})
		}),
		tag: defineCollection({
			type: 'data',
			source: 'tags/**.json',
			schema: z.object({
				title: z.string(),
				description: z.string(),
				slug: z.string(),
			})
		}),

		page: defineCollection({
			type: 'page',
			source: '**/*.md'
		}),

	}
}