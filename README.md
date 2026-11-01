# Sudeep Kumar — Portfolio

An Apple-inspired responsive portfolio built as one self-contained React 18 + TypeScript app. All sections, including experience and projects, are part of this repository; no separate portfolio or remote server is needed.

## Run locally

Requirements: Node.js 18+ and Yarn Classic 1.22.22.

```bash
yarn install
yarn start
```

You can also use `npm install` followed by `npm start`.

Open http://localhost:3000. The full portfolio starts from this project folder by itself.

## Build and publish

```bash
yarn typecheck
yarn build
```

The static site is written to `dist/`. Webpack includes the resume as a fingerprinted asset, so its link works under the project Pages URL as well as a custom domain.

## Update your resume

Replace `public/Sudeep-Kumar-Resume.pdf` with your new PDF, keeping the same filename, then publish with `yarn deploy` (see below). The build automatically includes the latest file, so no code changes are needed. The live site updates after GitHub Pages finishes deploying.

To publish from the existing `gh-pages` branch, run:

```bash
yarn deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch. The repository's GitHub remote must be configured.

## Project layout

```text
Portfolio-Sudeep-Kumar/
├── public/                    # HTML shell, favicon, resume PDF
├── src/
│   ├── app/                   # Redux store and UI state
│   ├── components/            # Header, hero and all portfolio sections
│   ├── data/                  # Profile, skills, education and content
│   ├── styles/                # Responsive light/dark design system
│   ├── App.tsx                # Full portfolio page
│   └── index.tsx              # Application entry point
├── types/                     # Asset type declarations
├── webpack.config.js
└── package.json
```

The contact form opens a pre-addressed email draft; it does not send mail from a backend.
