import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0a0a0a',
          card: '#111111',
          'card-hover': '#181818',
        },
        border: {
          DEFAULT: '#1a1a1a',
          hover: '#2a2a2a',
        },
        text: {
          primary: '#e8e8e8',
          secondary: '#888888',
          muted: '#505050',
        },
        accent: {
          green: '#22c55e',
          'green-light': '#4ade80',
          'green-dim': '#16a34a',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
