module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
