import Header from '@/components/shadcn/Header'
import Hero from '@/components/shadcn/Hero'
import About from '@/components/shadcn/About'
import Skills from '@/components/shadcn/Skills'
import Portfolio from '@/components/shadcn/Portfolio'
import PortfolioWrapper from '@/components/shadcn/PortfolioWrapper'
import Services from '@/components/shadcn/Services'
import Contact from '@/components/shadcn/Contact'
import Footer from '@/components/shadcn/Footer'
import { SlidingLogoBanner } from '@/components/shadcn/SlidingTechBanner'

export const metadata = {
  title: 'Freelance og CV side',
  description: 'A personal freelance website showcasing skills, portfolio, and services.',
  keywords: ['freelance', 'portfolio', 'tjenester', 'ferdigheter', 'kontakt', 'fullstack', 'webutvikler', 'webdesigner'],
  author: 'Maximilian Skjønhaug',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className='container'>
        <Header />
        <main>
          <Hero />
          <About />
          <SlidingLogoBanner />
          <Skills />
          {/* <Portfolio /> */}
          <PortfolioWrapper />
          <Services />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}