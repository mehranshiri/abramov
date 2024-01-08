## About this project
This is a recreated Dan Abramov’s personal weblog using [Next.js](https://nextjs.org/) with Typescript. It has the exact **Home** page and simple **Post** page.

It has dark/light mode which is implemented with [Redux](https://react-redux.js.org/)

## Styling
For styling the project [Tailwind](https://tailwindcss.com/) and Sass modules are used.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tests
[Vitest](https://vitest.dev/) is implemented for Unit testing on getData function and [Playwright](https://playwright.dev/) for end to end test.

For unit test run this command:
```bash
npm run test
```
And for end-to-end testing, run the following commands in order:
```bash
npm run build
npm run start
npm run test:e2e
```


![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
