import React from 'react'
import './about.css'
import PersonalPicture from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'

const About = () => {

  const [aboutText, setAboutText] = useState("Original Text");

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
<<<<<<< Updated upstream
            <article className='about__card'>
              <GiFilmProjector className='about__icon'/>
              <h5>Projects</h5>
              <small>Number of projects</small>
=======
            <article className='about__card' onPress={() => setAboutText("Changed Text")}>
              <GiMountainClimbing className='about__icon'/>
              <h5>Bouldering</h5>
            </article>
	          <article className='about__card'>
              <BiCodeCurly className='about__icon'/>
              <h5>Coding</h5>
>>>>>>> Stashed changes
            </article>
          </div>
          <p>{aboutText}</p>
          {/*
          <p>
<<<<<<< Updated upstream
            Lorem ipsum. Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.
=======
              In the last years I focused on my master studies, which I 
              successfully finished in September 2021. Now I am looking 
              for further challenges and a job where I can learn new things 
              and develop myself. 
              I would describe myself as a calm and open person who 
              learns quickly, listens well and values punctuality.
>>>>>>> Stashed changes
          </p>
          */}
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About