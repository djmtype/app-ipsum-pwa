import { defineCollection, z } from "astro:content"

const md = defineCollection({
	schema: z.object({
		title: z.string().max(100),
		description: z.string().optional(),
		eyeline: z.string(),
		number: z.string(),
		ogImage: z.string().optional(),
		image: z.array(z.string().optional()).optional(),
		tags: z.array(z.string().optional()).optional(),
		layoutStyle: z.string(),
		bodyAttrs: z.object({
			className: z.string().optional(),
		}),
		permalink: z.string().optional(),
	}),
})

export const collections = { md: md }
