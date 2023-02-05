module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "20%": {
            transform: "translate(50px, 0px) scale(1.1)",
          },
          "40%": {
            transform: "translate(0px, 50px) scale(0.9)",
          },
          "60%": {
            transform: "translate(-50px, 0px) scale(1.1)",
          },
          "80%": {
            transform: "translate(0px, -50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        celticblue: "#226CE0",
        hotpink: "#FF66B3",
        cultured: "#F0F6F6",
        powderblue: "#BBE6E4",
        maximumblue: "#42BFDD",
        accentyellow: "#f9b636",
        techcard: "rgba(0, 0, 0, 0.7)",
        techcard2: "rgba(0, 0, 0, 0.4)",
        jobtracker: "#212121",
        quartermaster: "#EE4E34",
        navbar: "rgba(255, 255, 255, 0.9)",
        newblue: "#329adf",
        tealish: "#0FDDBB",
        seagreen: "#5DFDCB",
        projectdark: "#102A43",
        projectnavdark: "#334E68",
        jobtrackeraccentdark: "#627D98",
      },
      fontFamily: {
        revue: ["Revue", "sans-serif"],
        alegreya: ["Alegreya Sans SC", "sans-serif"],
        robotoslab: ["Roboto Slab"],
        ibmplexsans: ["IBM Plex Sans", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      },
      screens: {
        xs: "550px",
        xxs: "450px",
        xmd: "896px",
        lxl: "1152px",
        xlx: "1408px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animation-delay"),
  ],
  darkMode: "class",
};
