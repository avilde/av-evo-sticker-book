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
