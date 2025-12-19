# Quick Setup Checklist

Follow this checklist to customize your documentation site.

## Initial Setup

- [ ] Clone or download this template
- [ ] Run `npm install`
- [ ] Run `npm run dev` to verify everything works

## Customization

### app/layout.jsx

- [ ] Line 17: Update site title template
- [ ] Line 19: Update default site title
- [ ] Line 21: Update site description
- [ ] Line 27-29: Update navbar logo text
- [ ] Line 32: Update GitHub project link URL
- [ ] Line 38: Update footer text and year
- [ ] Line 71: Update repository URL for "Edit this page" links

### next.config.mjs

- [ ] Line 16-17: Replace `your-repo-name` with your actual repository name

### package.json

- [ ] Update `name` field
- [ ] Update `description` field
- [ ] Update `author` field
- [ ] Update `repository.url` field
- [ ] Update `bugs.url` field
- [ ] Update `homepage` field

### Content

- [ ] Update `content/index.mdx` with your homepage content
- [ ] Update `content/_meta.json` with your navigation structure
- [ ] Add your documentation pages to `content/` folder
- [ ] Add images to `public/` folder if needed

## Optional Customization

### Colors (app/globals.css)

- [ ] Update `--nextra-primary-hue` for different accent color
- [ ] Update `--nextra-primary-saturation` for color intensity
- [ ] Update `--nextra-primary-lightness` for color brightness

### Fonts (app/layout.jsx)

- [ ] Replace Google Fonts link with your preferred font
- [ ] Update font-family in `app/globals.css`

## Deployment (Optional)

### GitHub Pages (Manual)

- [ ] Create repository on GitHub
- [ ] Push code to GitHub
- [ ] Run `npm run build`
- [ ] Deploy `out/` directory using `npx gh-pages -d out`

### GitHub Actions (Optional)

- [ ] Create `.github/workflows/deploy.yml` (see deployment.mdx)
- [ ] Go to Settings → Pages
- [ ] Set source to "GitHub Actions"

### Custom Domain (Optional)

- [ ] Add CNAME file to `public/` folder
- [ ] Configure DNS settings
- [ ] Enable HTTPS in GitHub settings

## Testing

- [ ] Test all navigation links
- [ ] Test search functionality (after deployment)
- [ ] Test dark mode toggle
- [ ] Test mobile responsiveness
- [ ] Test "Edit this page" links

## Done!

Your documentation site is ready! Share the URL with your team.

---

**Questions?** Check the [README.md](README.md) for detailed documentation.
