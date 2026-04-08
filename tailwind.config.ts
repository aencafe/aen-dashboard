import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aen: {
          beige: '#F5F3E9',
          marron: '#3A2724',
          orange: '#D94814',
          bleu: '#638BB0',
        }
      }
    },
  },
  plugins: [],
}
export default config