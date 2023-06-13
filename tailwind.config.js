/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      DEFAULT: ['1.125rem', '1.85rem'],
      title: ['2.5rem', '2.75rem'],
      subtitle: ['2rem', '2.25rem'],
      button: ['1rem', '1rem'],
    },
    screens: {
      mobile: '375px',
      tablet: '834px',
      desktop: '1024px',
    },
    fontFamily: {
      fraunces: ['Fraunces', 'system-ui', 'serif'],
      barlow: ['Barlow', 'system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'soft-red': '#FE7867',
      yellow: '#FAD400',
      'dark-desaturated-cyan': '#25564B',
      'dark-blue': '#19536B',
      'dark-moderate-cyan': '#458C7E',
      'very-dark-desaturated-blue': '#23303E',
      'very-dark-grayish-blue': '#5A636C',
      'dark-grayish-blue': '#818498',
      'grayish-blue': '#A7ABAE',
      white: '#FFFFFF',
      'light-blue': '#3DBEFD',
    },
    animation: {
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      pulse: {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.4,
        },
      },
    },
  },
  plugins: [],
};
