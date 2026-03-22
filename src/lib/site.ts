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
			{ label: 'CV', segment: 'cv' },
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
		brandRole: '电力电子博士研究者',
		navigation: [
			{ label: '首页', segment: '' },
			{ label: '时间线', segment: 'timeline' },
			{ label: '当前研究', segment: 'current-focus' },
			{ label: '项目', segment: 'projects' },
			{ label: '技能', segment: 'skills' },
			{ label: '博客', segment: 'blog' },
			{ label: '手册', segment: 'manuals' },
			{ label: '论文与报告', segment: 'publications' },
			{ label: '简历', segment: 'cv' },
		],
		footerBuiltWith: '基于 Astro 构建的双语科研个人站。',
		switchLabel: '语言',
		readMore: '继续阅读',
		viewProject: '查看项目详情',
		backToProjects: '返回项目页',
		backToBlog: '返回博客页',
		backToManuals: '返回手册页',
		latestWriting: '最新文章',
		labManuals: '实验手册',
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
