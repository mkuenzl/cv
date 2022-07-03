import React from 'react'
import './portfolio.css'

// Import Portfolio Icons
import PortfolioImg1 from '../../assets/icons/icon-metabar.png'
import PortfolioImg2 from '../../assets/icons/icon-raspberry-pi.png'
import PortfolioImg3 from '../../assets/icons/icon-webpage.png'

// Import Swiper Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const projectData = [
  {
    id: 1,
    image: PortfolioImg1,
    title: 'Metabar Coding Pipeline',
    github: 'https://github.com/mkuenzl/metabar-coding',
    image_alt: 'A pictogram of DNA sequences.',
    image_title: 'Metabar coding pipeline as github project'
  },
  {
    id: 2,
    image: PortfolioImg2,
    title: 'Home Server Monitoring',
    github: 'https://github.com/mkuenzl/home-server',
    image_alt: 'A pictogram of a raspberry pi.',
    image_title: 'Home server monitoring project with a raspberyy pi as github project'
  },
  {
    id: 3,
    image: PortfolioImg3,
    title: 'Personal Webpage',
    github: 'https://github.com/mkuenzl/mkuenzl.github.io',
    image_alt: 'A pictogram of a website.',
    image_title: 'Personal portfolio SPA build with react as github project'
  }
]

const Portfolio = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id='portfolio'>
      <h5>Things That I Worked On In My Freetime</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <Swiper pagination={true} modules={[Pagination]} className="swiper" spaceBetween={50}>     
        {
          projectData.map(({id, image, title, github, image_alt, image_title}) => {
            return (
              <SwiperSlide className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={image_alt} title={image_title} className='icon'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <button onClick={() => openInNewTab(`${github}`)} className='btn btn-primary'>Github</button>
                </div>        
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </section>
  )
}

export default Portfolio