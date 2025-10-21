export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "var(--body-bg)",
        surface: "var(--surface-bg)",
        card: "var(--card-bg)",
        text: "var(--text-color)",
        primary: "var(--primary)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
