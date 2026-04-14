import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import SocialProof from './components/SocialProof.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
