# Nextra Documentation Template

A beautiful, feature-rich documentation template built with [Nextra](https://nextra.site) and Next.js.

![Nextra](https://img.shields.io/badge/Nextra-4.6.1-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- ✨ **Beautiful Design** - Clean, modern design with perfect typography
- 🌓 **Dark Mode** - Fully supports dark mode with custom accent colors
- 🔍 **Search** - Built-in search powered by Pagefind
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎯 **TOC Highlighting** - Table of contents automatically highlights on scroll
- 🚀 **Fast** - Built with Next.js 16 and Turbopack
- 📝 **MDX Support** - Write content with Markdown + React components
- 🎨 **Customizable** - Easy to customize colors, fonts, and layout
- 📦 **Easy Deployment** - Deploy to GitHub Pages, Vercel, Netlify, or any static host

## Quick Start

### 1. Use This Template

Click the "Use this template" button on GitHub or clone the repository:

```bash
git clone https://github.com/yourusername/nextra-docs-template.git my-docs
cd my-docs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Site

Update the following TODO markers:

**`app/layout.jsx`:**
- Line 17-20: Update metadata (title, description)
- Line 27-29: Update navbar logo text
- Line 32: Update project link URL
- Line 38: Update footer text
- Line 71: Update repository URL for "Edit this page" links

**`next.config.mjs`:**
- Line 16: Replace `your-repo-name` with your actual repository name for GitHub Pages

**`package.json`:**
- Update `name`, `description`, `author`, `repository` fields

### 4. Add Your Content

Create or modify MDX files in the `content/` folder:

```
content/
├── _meta.json          # Navigation configuration
├── index.mdx           # Homepage
├── getting-started.mdx
├── features.mdx
└── deployment.mdx
```

Update `content/_meta.json` to configure navigation:

```json
{
  "index": "Home",
  "getting-started": "Getting Started",
  "features": "Features"
}
```

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## Project Structure

```
nextra-docs-template/
├── app/
│   ├── [[...mdxPath]]/      # Dynamic route handler for MDX pages
│   ├── layout.jsx           # Root layout with navbar and footer
│   └── globals.css          # Global styles
├── content/
│   ├── _meta.json           # Navigation configuration
│   └── *.mdx                # Your documentation pages
├── public/                  # Static assets (images, etc.)
├── mdx-components.jsx       # MDX components configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Deployment

### GitHub Pages

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Update Configuration:**
   - In `next.config.mjs`, replace `your-repo-name` with your actual repository name

3. **Deploy:**
   - Push the `out/` directory to the `gh-pages` branch, or
   - Use GitHub Actions (you'll need to set up a workflow), or
   - Use a tool like `gh-pages`: `npx gh-pages -d out`

### Other Platforms

**Vercel:**
1. Import repository to Vercel
2. Remove `basePath` and `assetPrefix` from `next.config.mjs`
3. Deploy

**Netlify:**
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `out`

## Customization

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --nextra-primary-hue: 15;           /* Accent color hue */
  --nextra-primary-saturation: 55.6%; /* Accent color saturation */
  --nextra-primary-lightness: 52.4%;  /* Accent color lightness */
  --nextra-bg: 253, 253, 247;         /* Background color */
}
```

### Change Fonts

Update the font link in `app/layout.jsx`:

```jsx
const fontLinks = (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
)
```

Then update the font family in `app/globals.css`:

```css
body {
  font-family: "Your Font", -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Add Custom Components

Create React components and use them in your MDX files:

```jsx filename="components/MyComponent.jsx"
export function MyComponent({ children }) {
  return <div className="my-component">{children}</div>
}
```

```mdx filename="content/page.mdx"
import { MyComponent } from '../components/MyComponent'

# My Page

<MyComponent>
  Custom content here!
</MyComponent>
```

## Writing Content

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** and *italic text*

- Bullet list
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)
```

### Code Blocks

\`\`\`javascript
function hello() {
  console.log("Hello, world!")
}
\`\`\`

### Callouts

```mdx
import { Callout } from 'nextra/components'

<Callout type="info">
  This is an info callout.
</Callout>

<Callout type="warning">
  This is a warning callout.
</Callout>
```

### Tables

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
```

## Tips

- **Search**: Generated automatically during build with Pagefind
- **TOC**: Auto-generated from H2 and H3 headings on each page
- **Edit Links**: Automatically added to each page (links to GitHub)
- **Breadcrumbs**: Auto-generated based on folder structure
- **Dark Mode**: Toggle in navbar, preference saved automatically

## Support

- [Nextra Documentation](https://nextra.site)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com)

## License

MIT License - feel free to use this template for any project!

## Credits

- Built with [Nextra](https://nextra.site)
- Powered by [Next.js](https://nextjs.org)

---

**Ready to start?** Run `npm install && npm run dev` and start building your documentation!
