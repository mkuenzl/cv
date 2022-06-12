import React from 'react'
import { useState } from 'react';
import './about.css'
import 'animate.css'
import { CSSTransition } from 'react-transition-group';

// import icons for stats
import {BsCalendar2Date} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {RiFilePaper2Line} from 'react-icons/ri'
import {BsPersonSquare} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {FaRegDotCircle} from 'react-icons/fa'

// Import Icons for passion texts
import {GiPlantRoots} from 'react-icons/gi'
import {GiCampCookingPot} from 'react-icons/gi'
import {GiMountainClimbing} from 'react-icons/gi'
import {BiCodeCurly} from 'react-icons/bi'


const About = () => {
  
  const [renderHidden, setRenderHidden] = useState(true);

  const handleClick = (event) => {
    setRenderHidden(!renderHidden);
  };

  const transitionClasses = {
    enter: "animate__animated animate__fadeInDown",
    enterActive: "animate__animated animate__fadeInDown",
    exit: "animate__animated animate__fadeOutUp",
    exitActive: "animate__animated animate__fadeOutUp"
  };

  const transitionClass = renderHidden ? transitionClasses.enterActive : transitionClasses.exitActive;

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little Bit About Me</h2>
      <div className="container about__container">
        <div className="about__text">
          <div className="about__description">
            <div className="about__stat">
              <div className="about__stat-type">
                <BsPersonSquare className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>Moritz Künzl</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <FaHome className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>Trier, Rheinland Pfalz</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <BsCalendar2Date className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>27.06.1994</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <FaGraduationCap className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>M. Sc. Business Information Systems</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <RiFilePaper2Line className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>Formative studies on runtime-based clustering of threads</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <MdOutlineWorkOutline className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>IT Auditor</p>
              </div>
            </div>
            <div className="about__stat">
              <div className="about__stat-type">
                <FaRegDotCircle className='about__stat-icon'/>
              </div>
              <div className="about__stat-info">
                <p>Looking for new challenges</p>
              </div>
            </div>
          </div>
          <div className="about__citation">
            <h2>
              "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
            </h2>
            <h4>Albert Einstein, 1931</h4>
          </div>
        </div>
        <div className="about__content">
          <div className="about__card-row">
            <div className="about__card-right" onClick={handleClick}>
              <div className="about__card">
                <GiPlantRoots className='about__icon-set'/>
              </div>
              <div className="about__card-text">
                <h2>
                  Enjoy plants.
                </h2>
                <p>
                  Before, I could hardly have plants because of the cats, and my first cactus dried up within a few months. 
                  After I moved, I was able to start greening the entire apartment and watch the plants grow. 
                  Caring for and studying plant characteristics relaxes me. 
                  I've also always found it fascinating that you can create ecosystems in a jar. 
                  That is why I have built several of my own, the oldest of which has remained untouched for 2 years.
                </p>
              </div>
            </div>
            
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Passion for cooking.
                </h2>
                <p>
                  From an early age, we always had home-cooked meals at home. 
                  However, it was only a few years ago that I discovered the fun of cooking together with a good friend. 
                  Now we get together regularly to try out new dishes or revive old favorites. 
                  Regular cooking, either in a group or alone, helps me to relax quickly after work.
                </p>
              </div>
              <div className="about__card">
                <GiCampCookingPot className='about__icon-set'/>
              </div>
            </div>

            <div className="about__card-right" onClick={handleClick}>
              <div className="about__card">
                <GiMountainClimbing className='about__icon-set'/>
              </div>
              <div className="about__card-text">
                <h2>
                  Enthusiasm for bouldering.
                </h2>
                <p>
                  Well, to get rid of all the calories from the food and the Corona time, you also have to do sports.
                  Bouldering has been my favorite sport for the past 3 years, because it combines problem-solving with a full-body workout. 
                  The community is incredibly supportive. I can only recommend everyone to try it out for themselves.
                </p>
              </div>
            </div>
    
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Interest in coding.
                </h2>
                <p>
                  I've been fascinated by computers since I was a kid. Altough I studied business informatic systems, it wasn't until I was doing my master's that it really clicked. 
                  While working on a module called "Compiler Construction", I had to develop a larger project for the first time, which was incredibly tricky and complicated, but also a lot of fun. 
                  During my master's thesis, I worked on a Java tool that uses an R server to 
                  cluster threads according to their runtime behavior. In the meantime, I developed another tool in my student job that creates different Word tables from Excel tables using Java, Powerquery and Html templates. 
                </p>
              </div>
              <div className="about__card">
                <BiCodeCurly className='about__icon-set'/>
              </div>
            </div>
          </div>
          {/*<CSSTransition in={renderHidden} timeout={1000} classNames={transitionClasses} unmountOnExit>
            <div className="about__details">
              <h2>Titel</h2>
              <p>Some text about the specific hobby.</p>
            </div>
  </CSSTransition>*/}
        </div>
      </div>
    </section>
  )
}

export default About
