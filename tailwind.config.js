/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.99 0.01 80)",
        secondaryBackground: "oklch(0.95 0.03 80)",
        foreground: "oklch(0.25 0.07 60)",
        "muted-foreground": "oklch(0.45 0.03 60)",
        backgroundHover: "oklch(0.9 0.05 70)",
      },
    },
  },
  plugins: [],
};
