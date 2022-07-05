import React from 'react'
import { Helmet } from "react-helmet";

import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/experience/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (    
    <html>
      <Helmet>
        <html lang="en" />
        <title>Moritz Künzl - Portfolio Website</title>
        <meta name="description" content="Personal portfolio website build with react. This website was used as a learning experience and to represent myself on the internet." />
        <meta name="theme-color" content="#E6E6FA" />
        <meta name="keywords" content="cv, moritz, künzl, moritz künzl, portfolio, personal website, github pages, lebenslauf, developer, trier, weidengraben, universität trier, softwareentwicklung, frontend, backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Moritz Künzl, mo.kuenzl@gmail.com"/>
        <meta name="url" content="https://mkuenzl.github.io"/>
        <meta name="revised" content="Sunday, June 27th, 2022, 5:15 pm" />
        <meta name="language" content="EN"/>
        <meta name="topic" content="Personal Webpage"/>
        <meta name="reply-to" content="mo.kuenzl@gmail.com"/>
        <meta name="owner" content="Moritz Künzl"/>

        <meta name="google-site-verification" content="KQgd_JEMUo9-726TMW1qDM9FyEOcUx9uGrkn5pvO-Kc" />

        <meta name="og:title" content="Moritz Künzl - Portfolio Website" />
        <meta name="og:url" content="https://mkuenzl.github.io" />
        <meta name="og:description" content="Personal portfolio website build with react. This website was used as a learning experience and to represent myself on the internet." />
        <meta name="og:image" content="src/assets/pictures/moritz-kuenzl-portrait.jpg" />
      </Helmet>
      
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