import { getCollection } from 'astro:content';
import type { Locale } from './site';

export async function getSiteConfig(locale: Locale) {
	const configs = await getCollection('siteConfig');
	const match = configs.find((entry) => entry.id === locale);

	if (!match) {
		throw new Error(`Missing site configuration for locale: ${locale}`);
	}

	return match.data;
}
