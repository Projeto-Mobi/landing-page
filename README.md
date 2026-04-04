# Landing Page

The official Mobi landing page repository. Following, there are some instructions on how to run, deploy and setup the development environment of the application.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Run the application

## Clone the repository
```
git clone https://github.com/Projeto-Mobi/landing-page.git
```

The landing-page can run isolated with Docker containers or locally with Node.js and Vite.

## 1. Docker

You can run the application in Docker containers using the following command:

```
docker compose up --build
```

## 2. Node.js (pnpm)

### Setup

This project uses the pnpm package manager for Node.js

If pnpm isn't installed in your machine, you can install it with npm by running these commands:

```
npx pnpm@latest-10 dlx @pnpm/exe@latest-10 setup
```

or

```
npm install -g pnpm@latest-10
```

There are also more related methods available in the pnpm official installation docs: https://pnpm.io/installation

### Installing dependencies from package.json

In order to install the packages needed to run the landing-page server, run:

```
pnpm install
```

### Dev server

```
pnpm dev
```

# Deploy

## Automated deploy

This project has automated deploy provided by Github Actions [workflow](https://github.com/Projeto-Mobi/landing-page/blob/main/README.md). This CI/CD pipeline applies Github Pages deploy on every push to the main branch.

## Manual deploy

Run ```pnpm build``` to create a static production build of the project using Vite's Building for Production command. The build output files are located in `/dist` by default. This static build can be deployed with a web server of your choose.

For development testing, you can run a production build preview with ```pnpm preview```