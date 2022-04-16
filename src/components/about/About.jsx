import React from 'react'
import './about.css'
import PersonalPicture from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little Bit About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PersonalPicture} alt="About picture of myself." />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Years of in Number</small>
            </article>
            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon'/>
              <h5>Clients</h5>
              <small>Clients in Number</small>
            </article>
            <article className='about__card'>
              <GiFilmProjector className='about__icon'/>
              <h5>Projects</h5>
              <small>Number of projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum. Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About