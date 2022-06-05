import React from 'react'
import { useState } from 'react';
import './about.css'

// Import Icons
import {GiPlantRoots} from 'react-icons/gi'
import {GiCampCookingPot} from 'react-icons/gi'
import {GiMountainClimbing} from 'react-icons/gi'
import {BiCodeCurly} from 'react-icons/bi'



const About = () => {

  const [aboutText, setAboutText] = useState("Original Text");
  const standardText = 'In the last years I focused on my master studies, which I ' + 
  'successfully finished in September 2021. Now I am looking ' +
  'for further challenges and a job where I can learn new things ' +
  'and develop myself. ' +
  'I would describe myself as a calm and open person who ' +
  'learns quickly, listens well and values punctuality.';

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little Bit About Me</h2>
      <div className="container about__container">
        <div className="about__text">
          <h2>
              {standardText}
          </h2>
        </div>
        <div className="about__content">
          <div className="about__card-row">
            <div className="about__card">
              <GiPlantRoots className='about__icon-set'/>
            </div>
            <div className="about__card">
              <GiCampCookingPot className='about__icon-set'/>
            </div>
            <div className="about__card">
              <GiMountainClimbing className='about__icon-set'/>
            </div>
            <div className="about__card">
              <BiCodeCurly className='about__icon-set'/>
            </div>
          </div>
          <div className="about__card-details">
            <span onclick="this.parentElement.style.display='none'" class="closebtn">x</span>
            <h2>Box 1</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
