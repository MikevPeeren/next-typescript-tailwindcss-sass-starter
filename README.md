# Next.js TypeScript TailwindCSS & Sass Starter

<p align="center">
  <img src="https://img.shields.io/github/license/MikevPeeren/next-typescript-tailwindcss-sass-starter" alt="License" />
  <img src="https://img.shields.io/badge/Next.js-15.2-blue" alt="Next.js Version" />
  <img src="https://img.shields.io/badge/React-19.1-blue" alt="React Version" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-blue" alt="TailwindCSS Version" />
</p>

Modern, production-ready starter template for Next.js projects with TypeScript, TailwindCSS v4, and Sass. Includes essential developer tools for code quality and testing.

## ✨ Features

This starter provides:

- **App Router** - Next.js 15.2 with the latest App Router architecture
- **Modern React** - Uses React 19.1 with latest features and optimizations
- **Type Safety** - Full TypeScript integration with strict type checking
- **Modern Styling** - TailwindCSS v4.0 with Sass support for advanced styling
- **Testing Ready** - Vitest and React Testing Library pre-configured
- **Code Quality** - ESLint, Prettier, Husky, and Lint-Staged for high-quality code
- **Performance Analysis** - Bundle analyzer for optimizing your app's size
- **Developer Experience** - Hot reloading, organized project structure

## 🧰 Tech Stack

- ⚡️ [Next.js 15.2](https://nextjs.org/) - React framework with App Router
- ⚛️ [React 19.1](https://reactjs.org/) - JavaScript library for building user interfaces
- 🧪 [Vitest 3.0](https://vitest.dev/) - Next generation testing framework
- 🧁 [TailwindCSS v4.0](https://tailwindcss.com/) - Utility-first CSS framework
- ✨ [TypeScript 5.8](https://www.typescriptlang.org/) - Strongly typed programming language
- 🎉 [Sass 1.86](https://sass-lang.com/) - Professional grade CSS extension language
- 📏 [ESLint v9.23](https://eslint.org/) - Find and fix problems in JavaScript code
- 🦋 [Prettier 3.5](https://prettier.io/) - Opinionated code formatter
- 🐶 [Husky 9.1](https://github.com/typicode/husky) - Git hooks to improve commits
- 🧹 [Lint Staged 15.5](https://github.com/okonet/lint-staged) - Run linters against staged git files
- 🔎 [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Analyze your project bundles

## ⚡️ Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter)

## 🚀 Getting Started

Run the following command to create a new project with this Starter:

```bash
yarn create next-app my-app -e https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter
# or
npx create-next-app my-app -e https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter
```

Once the project and dependencies are finished installing, you can navigate to that directory and start up the development server with:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your new project!

## 📝 Available Scripts

- `yarn dev` - Starts the development server
- `yarn build` - Builds the app for production
- `yarn start` - Runs the built app in production mode
- `yarn lint` - Runs ESLint for code linting
- `yarn test` - Runs Vitest test suite
- `yarn format` - Runs Prettier to format your code
- `yarn prepare` - Sets up Husky pre-commit hooks
- `yarn precommit` - Runs Lint Staged for staged files

## 📋 Project Structure

```
next-typescript-tailwindcss-sass-starter/
├── app/                   # Next.js App Router files
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage component
├── __tests__/             # Test files
├── styles/                # Global styles
│   ├── globals.scss       # Global SCSS with Tailwind imports
├── public/                # Static assets
├── .husky/                # Husky git hooks
```

## 🧪 Testing

This starter uses Vitest and React Testing Library for testing. An example test is included in the `__tests__` directory.

```bash
# Run tests
yarn test
```

## 💅 Styling

This starter combines TailwindCSS and Sass for a powerful styling workflow:

- TailwindCSS for utility-first CSS
- Sass for more complex styling needs
- Organized global styles in the `styles` directory

## 🛠️ Development Tools

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Maintains consistent code style
- **Husky**: Runs checks before commits
- **Lint Staged**: Runs linters against staged git files

## 📚 Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 📄 License

This project is licensed under the MIT License.
