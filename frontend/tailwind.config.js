/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#0f131c",
        "surface-dim": "#0f131c",
        "surface-bright": "#353942",
        "surface-container-lowest": "#0a0e16",
        "surface-container-low": "#181c24",
        "surface-container": "#1c2028",
        "surface-container-high": "#262a33",
        "surface-container-highest": "#31353e",
        "on-surface": "#dfe2ee",
        "on-surface-variant": "#c7c4d7",
        "inverse-surface": "#dfe2ee",
        "inverse-on-surface": "#2c3039",
        "outline": "#908fa0",
        "outline-variant": "#464554",
        "surface-tint": "#c0c1ff",
        "primary": "#6366f1",
        "primary-hover": "#818cf8",
        "primary-container": "#8083ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#0d0096",
        "secondary": "#4cd7f6",
        "on-secondary": "#003640",
        "secondary-container": "#03b5d3",
        "on-secondary-container": "#00424e",
        "tertiary": "#10b981",
        "tertiary-bright": "#34d399",
        "on-tertiary": "#003824",
        "tertiary-container": "#00885d",
        "error": "#ef4444",
        "on-error": "#ffffff",
        "error-container": "#93000a",
        "background": "#0b0f17",
        "on-background": "#dfe2ee",
        "surface-variant": "#31353e"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      fontFamily: {
        "display": ["Geist", "Inter", "sans-serif"],
        "headline": ["Geist", "Inter", "sans-serif"],
        "body": ["Inter", "-apple-system", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
