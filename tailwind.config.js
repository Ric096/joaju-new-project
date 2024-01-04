// import { addDynamicIconSelectors } from '@iconify/tailwind';
/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
    colors: {
      lightPurple: '#e7cbec',
      otherPurple: '#dab6fc',
      surface900: '#212121',
    },
  },
};
export const plugins = [
  require('flowbite/plugin'),
  // addDynamicIconSelectors(),
];

