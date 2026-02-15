import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0b',
          secondary: '#111113',
          card: '#161618',
          'card-hover': '#1c1c1f',
        },
        border: {
          DEFAULT: '#222225',
          hover: '#333338',
        },
        text: {
          primary: '#f0f0f2',
          secondary: '#8a8a96',
          muted: '#55555f',
        },
        accent: {
          green: '#4ade80',
          'green-dim': '#22c55e',
          blue: '#60a5fa',
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
