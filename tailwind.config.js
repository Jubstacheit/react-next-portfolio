/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite/**/*.js"
];
export const darkMode = 'class';
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      JetBrains_Mono: ['JetBrains Mono', 'monospace'],
      JetBrains_MonoBold: ['JetBrains Mono Bold', 'monospace'],
      JetBrains_MonoExtraBold: ['JetBrains Mono Extra Bold', 'monospace'],
      JetBrains_MonoItalic: ['JetBrains Mono Italic', 'monospace'],
    },
  },
};

export const plugins = [
  require('flowbite/plugin')
];