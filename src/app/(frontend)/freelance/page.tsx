import Header from '@/components/shadcn/Header'
import Hero from '@/components/shadcn/Hero'
import About from '@/components/shadcn/About'
import Skills from '@/components/shadcn/Skills'
import Portfolio from '@/components/shadcn/Portfolio'
import PortfolioWrapper from '@/components/shadcn/PortfolioWrapper'
import Services from '@/components/shadcn/Services'
import Contact from '@/components/shadcn/Contact'
import Footer from '@/components/shadcn/Footer'


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Portfolio /> */}
        <PortfolioWrapper />
        <Services />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}