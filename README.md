# greenspark

A simple service just to show some basic coding skills. I used VueJS and Pinia, together with TypeScript. Prettier for code formatting.
There are still plenty of things that could be improved, but have been compromised with out of time constraint. Some of the following are:

* I made a lib similar to tailwind, since I know a lot of devs don't like to work with CSS and prefer to just use classes. But many more classes would be needed:
    - Spacings(margin, padding)
    - Sizes (width, height etc)
    - Typography
    - Layout (flex, grid, etc) - added a few flex classes but far from all
    - breakpoints

* Placeholders for asynchronous operations - while waiting for data to be fetched. Since the mockdata provided is small, this is not a problem in the code test, but for a more complex app it would make sense to show a skeleton placeholder in case data takes time to load.
* Tests (unit, e2e)
* Linting (git hooks)
* Error handling. None error handling is done on the message layer (the store) or in the components. This would be a necessity in a real production app. But for the purpose of this code test I decided to leave it out. 

To run the project:

add a .env.local in the root with VITE_API_BASE_URL=https://path/to/endpoint

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
(not necessary to run)
```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
(not implemented)
```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

(not implemented)
```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):
(not implemented)
```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Feel free to reach out for questions
