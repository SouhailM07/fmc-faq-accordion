/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#f1ebf1",
        grayishPurple: "#7d6a80",
        darkPurple: "#1a0d1e",
      },
    },
    screens: {
      sm: "500px",
      tablet: "768px",
    },
  },
  plugins: [],
};
