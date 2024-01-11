import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    container: {
      padding: {
        mobile: '1rem',
        desktop: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          red: 'hsl(1, 90%, 64%)',
          blue: 'hsl(219, 85%, 26%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
          lightGrayishBlue1: 'hsl(211, 68%, 94%)',
          lightGrayishBlue2: 'hsl(205, 33%, 90%)',
          grayishBlue: 'hsl(219, 14%, 63%)',
          darkGrayishBlue: 'hsl(219, 12%, 42%)',
          veryDarkBlue: 'hsl(224, 21%, 14%)',
        },
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        extraBold: '800',
      },
      fontSize: {
        body: '16px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
