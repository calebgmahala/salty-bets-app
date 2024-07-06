import resolveConfig from 'tailwindcss/resolveConfig'

const config = resolveConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comic Sans MS", "Comic Sans", "cursive", "sans-serif"],
      serif: [
        "TimesNewRoman",
        "Times New Roman",
        "Times",
        "Baskerville",
        "Georgia",
        "serif",
      ],
    },
  },
  extend: {
    theme: {
      colors: {
        "salty-red": "#be1e2c",
        "salty-blue": "#00adee",
      }
    },
  },
});

export default config
