import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localeField = z.enum(['en', 'zh']);
const linkField = z.object({
	label: z.string(),
	href: z.string(),
});

const contentFields = {
	lang: localeField,
	translationKey: z.string(),
	routeSlug: z.string(),
};

export const collections = {
	siteConfig: defineCollection({
		loader: glob({ base: './src/content/site-config', pattern: '*.json' }),
		schema: z.object({
			name: z.string(),
			title: z.string(),
			tagline: z.string(),
			defaultLocale: localeField,
			location: z.string(),
			email: z.string(),
			researchAreas: z.array(z.string()),
			hero: z.object({
				headline: z.string(),
				subheadline: z.string(),
				keywords: z.array(z.string()),
				quickFacts: z.array(
					z.object({
						label: z.string(),
						value: z.string(),
						detail: z.string(),
					}),
				),
			}),
			currentFocus: z.object({
				theme: z.string(),
				importance: z.string(),
				now: z.string(),
				projects: z.array(
					z.object({
						title: z.string(),
						status: z.string(),
						summary: z.string(),
					}),
				),
				methods: z.array(z.string()),
				goals: z.array(z.string()),
			}),
			skillGroups: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
					items: z.array(z.string()),
				}),
			),
			featuredProjects: z.array(z.string()),
			socialLinks: z.array(linkField),
			cv: z.object({
				profile: z.string(),
				education: z.array(
					z.object({
						stage: z.string(),
						institution: z.string(),
						period: z.string(),
						focus: z.string(),
					}),
				),
				strengths: z.array(z.string()),
				collaboration: z.array(z.string()),
			}),
			contact: z.object({
				title: z.string(),
				text: z.string(),
			}),
		}),
	}),
	timeline: defineCollection({
		loader: glob({ base: './src/content/timeline', pattern: '**/*.md' }),
		schema: z.object({
			...contentFields,
			order: z.number(),
			title: z.string(),
			period: z.string(),
			institution: z.string(),
			role: z.string(),
			summary: z.string(),
			projects: z.array(z.string()),
			skills: z.array(z.string()),
		}),
	}),
	projects: defineCollection({
		loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
		schema: z.object({
			...contentFields,
			order: z.number(),
			title: z.string(),
			status: z.enum(['active', 'ongoing', 'completed']),
			period: z.string(),
			domain: z.string(),
			stack: z.array(z.string()),
			keywords: z.array(z.string()),
			summary: z.string(),
			highlights: z.array(z.string()),
			links: z.array(linkField).default([]),
			featured: z.boolean().default(false),
			cover: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
		schema: z.object({
			...contentFields,
			title: z.string(),
			date: z.coerce.date(),
			summary: z.string(),
			tags: z.array(z.string()),
			draft: z.boolean().default(false),
		}),
	}),
	manuals: defineCollection({
		loader: glob({ base: './src/content/manuals', pattern: '**/*.md' }),
		schema: z.object({
			...contentFields,
			title: z.string(),
			tool_or_platform: z.string(),
			difficulty: z.enum(['intro', 'intermediate', 'advanced']),
			updatedAt: z.coerce.date(),
			summary: z.string(),
			tags: z.array(z.string()),
		}),
	}),
	publications: defineCollection({
		loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
		schema: z.object({
			...contentFields,
			title: z.string(),
			venue: z.string(),
			year: z.number(),
			authors: z.array(z.string()),
			type: z.string(),
			summary: z.string(),
			links: z.array(linkField).default([]),
		}),
	}),
};
