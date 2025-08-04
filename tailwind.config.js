/** @type {import('tailwindcss').Config} */

// export default {
//   content: [
//     "./resources/**/*.blade.php",
//     "./resources/**/*.js",
//     "./resources/**/*.jsx",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const animate = require("tailwindcss-animate");

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

