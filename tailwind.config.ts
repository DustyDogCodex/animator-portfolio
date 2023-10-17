import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': 'url(/LandingPage.jpeg)',
        'about-bg': 'url(/AboutPage.jpeg)',
        'portfolio-bg': 'url(/PortfolioPage.jpeg)',
        'contact-bg': 'url(/ContactPageBG.svg)',
        'card-bg': 'url(/CardDesign.jpg)',
        'card-front-bg': 'url(/tiger.jpg)',  
      },
    },
  },
  plugins: [],
}
export default config
