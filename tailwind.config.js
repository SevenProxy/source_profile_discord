/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.vue",
      "./src/*.vue",
      "./src/*.vue",
      "./src/**/*.vue",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.vue",
      "./public/*.vue",
      "./index.html",
      "./src/**/*.{vue,ts,tsx}",
      "./src/components/**/*.{vue,ts,tsx}",
      "./src/pages/**/*.{vue,ts,tsx}",
      "./src/pages/*.{vue, ts, tsx}",
      "./src/helpers/**/*.{vue, ts, tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{vue,ts,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{vue,ts,tsx}",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

