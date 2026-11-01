# Sudeep Kumar — Portfolio

An Apple-inspired responsive portfolio built as one self-contained React 18 + TypeScript app. All sections, including experience and projects, are part of this repository; no separate portfolio or remote server is needed.

**Live portfolio:** https://sudeep-kr-1999.github.io/Portfolio-Sudeep-Kumar/

## Run locally

Requirements: Node.js 18+ and Yarn Classic 1.22.22.

```bash
yarn install
yarn start
```

You can also use `npm install` followed by `npm start`.

To preview changes on your own computer, run the development server and open http://localhost:3000.

## Build and publish

```bash
yarn typecheck
yarn build
```

The static site is written to `dist/`. Webpack includes the resume as a fingerprinted asset, so its link works under the project Pages URL as well as a custom domain.

### Automatic deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. Every push to the `master` branch automatically:

1. Installs dependencies using the committed Yarn lockfile.
2. Runs the TypeScript type-check.
3. Builds the portfolio into `dist/`.
4. Deploys the build to GitHub Pages.

**One-time GitHub Pages setup:** Open this repository's **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow can then deploy automatically on every subsequent push to `master`. You can also start it manually from the repository's **Actions** tab using **Deploy portfolio to GitHub Pages**.

### Update your resume

Replace `public/Sudeep-Kumar-Resume.pdf` with your new PDF, keeping the same filename, and commit the change to `master`. The automatic workflow rebuilds and publishes the latest file.

## Project layout

```text
Portfolio-Sudeep-Kumar/
├── .github/workflows/          # Automatic GitHub Pages deployment
├── public/                     # HTML shell, favicon, resume PDF
├── src/
│   ├── app/                    # Redux store and UI state
│   ├── components/             # Header, hero and all portfolio sections
│   ├── data/                   # Profile, skills, education and content
│   ├── styles/                 # Responsive light/dark design system
│   ├── App.tsx                 # Full portfolio page
│   └── index.tsx               # Application entry point
├── types/                      # Asset type declarations
├── webpack.config.js
└── package.json
```

The contact form opens a pre-addressed email draft; it does not send mail from a backend.
