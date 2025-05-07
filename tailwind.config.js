/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.145 0.06 240)",
        secondaryBackground: "oklch(0.145 0.06 240 / 0.3)",
        foreground: "oklch(0.985 0.02 240)",
        "muted-foreground": "oklch(0.708 0.06 240)",
        backgroundHover: "oklch(0.7 0.15 240 / 0.3)",
      },
    },
  },
  plugins: [],
};
