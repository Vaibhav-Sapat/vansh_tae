# PageTurner Books — Marketing Strategy & Local Retail Revival

An omni-channel marketing strategy case study and digital revival blueprint for **PageTurner Books**, an independent bookseller founded in 1998.

## 🚀 GitHub Pages Deployment Guide

This project is configured to run reliably on **GitHub Pages** (both at the root domain or in repository subdirectories like `https://<username>.github.io/<repository-name>/`).

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub on branch `main` or `master`.
2. On GitHub, navigate to your repository **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site and deploy every time you push changes to your repository!
5. In the **Actions** tab, you will see the `Deploy PageTurner to GitHub Pages` workflow run and provide your live URL.

### Option 2: Manual Deployment via Terminal

If you prefer deploying directly to a `gh-pages` branch:

```bash
# 1. Install dependencies
npm install

# 2. Build and deploy to GitHub Pages
npm run deploy
```

Then in GitHub **Settings** → **Pages**, select **Deploy from a branch** and choose `gh-pages` / `(root)`.

---

## 🛠️ Key Technical Fixes for GitHub Pages

1. **Relative Asset Base (`vite.config.ts`)**:
   Configured `base: './'` so all compiled script, style, and font chunks resolve relative to the repository path rather than failing with root-domain 404 errors.
2. **SPA Direct Link & Refresh Support (`404.html`)**:
   Automated build hook creates `dist/404.html` identical to `dist/index.html` to prevent 404 errors on deep linking and browser reloads on GitHub Pages.
3. **Adaptive Asset Resolution (`EmblemLogo.tsx`)**:
   Provides dynamic base URL path resolution with a resilient inline vector SVG fallback so branding crests never break.
4. **CI/CD Workflow (`.github/workflows/deploy.yml`)**:
   Includes official GitHub Actions steps (`actions/upload-pages-artifact` & `actions/deploy-pages`) with standard permissions and concurrency gates.

---

## 💻 Local Development

```bash
# Start local development server
npm run dev

# Compile production build
npm run build

# Preview production build locally
npm run preview
```
