/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      colors: {
        "brand-black": "#1A0004",
        "brand-black2": "#2B2F44",
        "brand-primary": "#053CCC",
        "light-yellow": "#FDF9EE",
        "light-grey": "#F5F5F5",
        "grey": "#5B6E88",
        "grey2": "#2c364c",
        "grey3": "#8F8F8F",
        "grey4": "#f5f7fa",
        "brand-black:": "#1A1A1A",
        "brand-black2:": "#292C26",
        "brand-primary-light": "#FFFCF0",
        "brand-green": "#089115",
        "brand-spot": "#ECB20A",
        "brand-mail": "#EE9430",
        "brand-red": "#E51A3C",
        overlay: "rgba(26, 0, 4, 0.7)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
