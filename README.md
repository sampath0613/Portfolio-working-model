# Portfolio Website

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Development

Run locally:
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages.

### Initial Setup

1. Push your code to GitHub in a repository named `Portfolio-working-model`

2. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select:
     - Source: "GitHub Actions"
   - Save the settings

3. The site will deploy automatically on push to `main` branch

### Manual Deployment

If you need to trigger a deployment manually:
1. Go to Actions tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### View Your Site

Once deployed, your site will be available at:
`https://[your-username].github.io/Portfolio-working-model/`

## Configuration

- `vite.config.ts`: Build and development settings
- `client/src/`: Source code
- `.github/workflows/deploy.yml`: GitHub Actions deployment config

## Notes

- Assets and images in `attached_assets/` are included in the build
- The site uses client-side routing - all routes work on GitHub Pages
- Local development runs on `http://localhost:5000`