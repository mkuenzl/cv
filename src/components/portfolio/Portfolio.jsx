import React from 'react'
import './portfolio.css'
import PortfolioImg1 from '../../assets/portfolio1.jpg'
import PortfolioImg2 from '../../assets/portfolio2.jpg'
import PortfolioImg3 from '../../assets/portfolio3.jpg'

const projectData = [
  {
    id: 1,
    image: PortfolioImg1,
    title: 'Projekt 1',
    github: 'https://Github.com'
  },
  {
    id: 2,
    image: PortfolioImg2,
    title: 'Projekt 2',
    github: 'https://Github.com'
  },
  {
    id: 3,
    image: PortfolioImg3,
    title: 'Projekt 3',
    github: 'https://Github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Stuff</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projectData.map(({id, image, title, github}) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt=''/>
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