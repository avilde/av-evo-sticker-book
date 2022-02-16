# [AV] Evolution Sticker Book Project

## Preview

TODO: add GIFs

[Demo - App](https://av-evo-sticker-book-app.netlify.app/)

[Demo - Storybook](https://av-evo-sticker-book-storybook.netlify.app/)

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/240d3c89-aa14-4e52-9c8e-33664d7245de/deploy-status)](https://app.netlify.com/sites/av-evo-sticker-book-storybook/deploys)

Netlify is used to host & automatically deploy the website from Github.

## Setup

If you have already installed NodeJS (LTS version) and you should have package manager npm already installed. Optionally if you want to try yarn you can install it globally.

```sh
npm install --global yarn
yarn create react-app evo-sticker-book --template typescript
cd evo-sticker-book
yarn add storybook
yarn sb init
yarn storybook
```

There should be default storybook template files added which you can remove if you won't use them (delete the folder `src\stories`).

### Enabling Tailwind with PostCSS

To quickly generate `postcss.config.js` and `tailwind.config.js` we can use this command:

```sh
npx tailwindcss init -p
```

For TailwindCSS to fully work on our project we will need to do some post-install steps:
Open file `src/index.css` and replace all with contents:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In file `src/index.tsx` add a line at the top:

```js
import '../index.css'
```

Open `tailwind.config.js` file and update content property to (otherwise Tailwind won't include the class names you use in your components):

```json
content: ["./src/**/*.{ts,tsx}"],
```

For Storybook, we need to include the TailwindCSS directives in `.storybook/preview.js` which will apply the CSS to all stories in Storybook:

```js
import '../src/index.css'
```

### Setting up static directory for assets

Storybook documentation recommends serving static files via Storybook to ensure that your components always have the assets they need to load.

Open `./storybook/main.js` file and add property `staticDirs`. For example, `staticDirs: ["../src/assets"]`.

[[about static assets](https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook)]

## Decisions

TODO: describe decisions made in project

## Development

TODO: added info how to start local development
