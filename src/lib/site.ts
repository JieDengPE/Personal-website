export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localizedLabels = {
	en: {
		brandRole: 'Power Electronics PhD Researcher',
		navigation: [
			{ label: 'Home', segment: '' },
			{ label: 'Timeline', segment: 'timeline' },
			{ label: 'Current Focus', segment: 'current-focus' },
			{ label: 'Projects', segment: 'projects' },
			{ label: 'Skills', segment: 'skills' },
			{ label: 'Blog', segment: 'blog' },
			{ label: 'Manuals', segment: 'manuals' },
			{ label: 'Publications', segment: 'publications' },
		],
		footerBuiltWith: 'Built with Astro for a bilingual research portfolio.',
		switchLabel: 'Language',
		readMore: 'Read more',
		viewProject: 'View case study',
		backToProjects: 'Back to projects',
		backToBlog: 'Back to blog',
		backToManuals: 'Back to manuals',
		latestWriting: 'Latest writing',
		labManuals: 'Lab manuals',
	},
	zh: {
		brandRole: 'Power Electronics PhD Researcher',
		navigation: [
			{ label: 'Home', segment: '' },
			{ label: 'Timeline', segment: 'timeline' },
			{ label: 'Current Focus', segment: 'current-focus' },
			{ label: 'Projects', segment: 'projects' },
			{ label: 'Skills', segment: 'skills' },
			{ label: 'Blog', segment: 'blog' },
			{ label: 'Manuals', segment: 'manuals' },
			{ label: 'Publications', segment: 'publications' },
		],
		footerBuiltWith: 'Built with Astro for a bilingual research portfolio.',
		switchLabel: 'Language',
		readMore: 'Read more',
		viewProject: 'View case study',
		backToProjects: 'Back to projects',
		backToBlog: 'Back to blog',
		backToManuals: 'Back to manuals',
		latestWriting: 'Latest writing',
		labManuals: 'Lab manuals',
	},
} as const;

const basePrefix = (() => {
	const base = import.meta.env.BASE_URL ?? '/';
	if (base === '/') return '';
	return `/${base.replace(/^\/|\/$/g, '')}`;
})();

export function localizePath(locale: Locale, segment = '') {
	const clean = segment.replace(/^\/+|\/+$/g, '');
	const localPath = locale === 'en' ? (clean ? `/${clean}/` : '/') : clean ? `/zh/${clean}/` : '/zh/';
	return `${basePrefix}${localPath}`.replace(/\/{2,}/g, '/');
}

export function normalizePathname(pathname: string) {
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function isActivePath(currentPath: string, href: string) {
	const normalizedCurrent = normalizePathname(currentPath);
	const normalizedHref = normalizePathname(href);
	return normalizedCurrent === normalizedHref || (normalizedHref !== '/' && normalizedCurrent.startsWith(normalizedHref));
}
