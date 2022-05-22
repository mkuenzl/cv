import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/experience/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <html>
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </html>
  )
}

export default App