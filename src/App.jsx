import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Intro } from './components/Intro'
import { WorkspacePreview } from './components/workspace/WorkspacePreview'
import { HowItWorks } from './components/HowItWorks'
import { Roles } from './components/Roles'
import { ModuleCatalog } from './components/ModuleCatalog'
import { ProcessStepper } from './components/ProcessStepper'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return undefined

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.documentElement.classList.add('motion-ready')
    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))

    return () => {
      revealObserver.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="campusflow-app">
      <Header />
      <Hero />
      <Marquee />
      <Intro />
      <WorkspacePreview />
      <HowItWorks />
      <Roles />
      <ModuleCatalog />
      <ProcessStepper />
      <Testimonials />
      <Faq />
      <Contact />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
