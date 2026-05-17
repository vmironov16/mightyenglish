/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#322d6b',
        accent: '#5b55d0',
        'accent-light': '#8b87e0',
        surface: '#f8f7ff',
        'site-border': '#e5e0f5',
        'site-muted': '#6b7280',
        'site-text': '#1a1a2e',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      maxWidth: {
        site: '1100px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(50, 45, 107, 0.08)',
        md: '0 4px 20px rgba(50, 45, 107, 0.12)',
        lg: '0 8px 40px rgba(50, 45, 107, 0.16)',
      },
    },
  },
};
