# Power Electronics Academic Site

An Astro-based bilingual personal website for a power electronics PhD researcher. The site is designed around:

- English as the default entry point
- A visible `EN / 中文` switch on every main page
- A fast 30-second explanation of current research
- Structured sections for timeline, projects, skills, blog posts, manuals, publications, and CV/contact

## Tech Stack

- Astro 6
- Markdown content collections
- GitHub Pages deployment

## Local Development

Use Node.js 22+.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build
npm run check
```

## Content Structure

Main structured content lives in `src/content/`:

- `site-config/` for bilingual site-wide profile data
- `timeline/` for growth stages from undergraduate study to PhD
- `projects/` for research and engineering projects
- `blog/` for reflective writing and technical notes
- `manuals/` for procedural hardware/software documentation
- `publications/` for papers, posters, talks, and other outputs

Each localized entry includes:

- `lang`
- `translationKey`
- `routeSlug`

Those fields are used to power bilingual routing and the language toggle.

## Deployment

This repo includes a GitHub Actions workflow for GitHub Pages deployment.

The Astro `base` path is derived from `GITHUB_REPOSITORY`, so it works for:

- `username.github.io`
- project repositories such as `username/Personal_website`

To deploy:

1. Push this project to GitHub.
2. In the repository settings, enable GitHub Pages with `GitHub Actions` as the source.
3. Push to `main` and the workflow will build and publish the site.

## Personalization Checklist

Before publishing, replace placeholders such as:

- `[Your Name]`
- `[University Name]`
- `[City, Country]`
- `your.email@example.com`
- `your-username`

Recommended first edits:

1. Update `src/content/site-config/en.json`
2. Update `src/content/site-config/zh.json`
3. Replace placeholder project/publication links
4. Add your own blog posts and manuals
5. Swap in your real education timeline and current research focus
