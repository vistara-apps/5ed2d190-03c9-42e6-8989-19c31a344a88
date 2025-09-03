/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220 89% 51%)',
        accent: 'hsl(211 100% 81%)',
        bg: 'hsl(0 0% 98%)',
        surface: 'hsl(0 0% 100%)',
        textPrimary: 'hsl(222 40% 20%)',
        textSecondary: 'hsl(222 40% 40%)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px', 
        'lg': '16px',
      },
      spacing: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(222, 40%, 20%, 0.08)',
      },
      animation: {
        'fade-in': 'fade-in 250ms cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slide-up 250ms cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
