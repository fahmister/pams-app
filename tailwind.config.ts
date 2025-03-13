const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--geist-sans)', ...fontFamily.sans],
        mono: ['var(--geist-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};