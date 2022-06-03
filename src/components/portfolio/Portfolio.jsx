import React from 'react'
import './portfolio.css'
import PortfolioImg1 from '../../assets/icons/icon-metabar.png'
import PortfolioImg2 from '../../assets/icons/icon-raspberry-pi.png'
import PortfolioImg3 from '../../assets/icons/icon-webpage.png'

const projectData = [
  {
    id: 1,
    image: PortfolioImg1,
    title: 'Metabar Coding Pipeline',
    github: 'https://github.com/mkuenzl/metabar-coding'
  },
  {
    id: 2,
    image: PortfolioImg2,
    title: 'Home Server Monitoring',
    github: 'https://github.com/mkuenzl/home-server'
  },
  {
    id: 3,
    image: PortfolioImg3,
    title: 'Personal Webpage',
    github: 'https://github.com/mkuenzl/mkuenzl.github.io'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Things That I Worked On In My Freetime</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projectData.map(({id, image, title, github}) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt='' className='icon'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                </div>        
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
