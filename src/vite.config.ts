import { ghPages } from "vite-plugin-gh-pages";

/** @type {import('vite').UserConfig} */
export default {
  base: "/portfolio-2023/",
  plugins: [ghPages()],
};

//test
