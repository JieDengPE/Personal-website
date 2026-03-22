// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

const [repoOwner = 'your-github-username', repoName = 'Personal_website'] = (
	process.env.GITHUB_REPOSITORY ?? 'your-github-username/Personal_website'
).split('/');
const isUserSite = repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;

export default defineConfig({
	site: `https://${repoOwner}.github.io`,
	base: isUserSite ? '/' : `/${repoName}/`,
});
