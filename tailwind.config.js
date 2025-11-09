/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        secondaryText: "var(--secondaryText)",
        primary: "var(--primary)",
        border: "var(--border)",
      },
      fontFamily: {
        heading: ["Zen Maru Gothic", "sans-serif"],
        body: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
