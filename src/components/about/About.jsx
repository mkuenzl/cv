import React from 'react'
import { useState } from 'react';
import './about.css'
import 'animate.css'
import { CSSTransition } from 'react-transition-group';

// Import Icons
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
          <h2>
            In the last years I focused on my master studies, which I successfully finished in September 2021.
          </h2>
          <h2>
            Now I am looking for further challenges and a job where I can learn new things and develop myself.
          </h2>
          <h2>
            Calm, Open, Curious
          </h2>
        </div>
        <div className="about__content">
          <div className="about__card-row">
            <div className="about__card-right" onClick={handleClick}>
              <div className="about__card">
                <GiPlantRoots className='about__icon-set'/>
              </div>
              <div className="about__card-text">
                <h2>
                  Love for plants.
                </h2>
                <p>
                  Before I could hardly have plants due to cats and my first cacti dried up within months.
                  After my move I was able to start greening the entire apartment and watch the plants grow. The care and the study of the 
                  plant characteristics gives me inner peace. Besides, I have always found it fascinating that ecosystems can be created in a jar.
                  That is why I have built several of my own, the oldest of which has been untouched for 2 years.
                </p>
              </div>
            </div>
            
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Love for cooking.
                </h2>
                <p>
                  From an early age, there was always home-cooked food at home. However, I have only a few years ago together with a good friend
                  I realized the fun of cooking for myself. Now we meet regularly to try new dishes or revive old favorites. 
                  old favorites. Regular cooking either in a group or alone quickly after work helps me to relax.
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
                  Love for bouldering.
                </h2>
                <p>
                  Well, to get rid of all the calories of the food and the Corona time, you also have to do sports.
                  Boudlern is since 3 years my absolute favorite sport, because here a problem-solving way of thinking is combined with 
                  a whole body workout. The community is incredibly helpful and kind. I can only recommend everyone to try it out for themselves.
                </p>
              </div>
            </div>
    
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Love for coding.
                </h2>
                <p>
                  Although I have been fascinated by computers since I was a child and studied business informatics, it was only during my master's degree that it really clicked for me. 
                  it really clicked. When working on a module called "Compiler Construction", I first had to develop a larger project, which was incredibly tricky and complicated, but also a lot of fun. 
                  but it was also a lot of fun. Afterwards, during my master thesis, I worked on a Java tool, which, with the help of an R-Server 
                  clustering threads according to runtime behavior. In the meantime, I developed another tool in my student job, which creates various Word tables from Excel tables.
                  Word tables with the help of Java, Powerquery and Html templates. 
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
