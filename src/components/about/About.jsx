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
                Früher konnte ich kaum Pflanzen haben aufgrund von Katzen und meine ersten Kakteen sind innerhalb von Monaten vertrocknet.
                Nach meinem Umzug konnte ich anfangen die komplette Wohnung zu begrünen und den Pflanzen beim wachsen zu zusehen. Die Pflege und das studieren der 
                Pflanzeneigenschaften bereitet mit innere Ruhe. Nebenbei fand ich es schon immer fazinierend, dass in einem Glas Ökösysteme kreiert werden können.
                Deshalb hab ich mittlerweile mehrere eigene gebaut, von denen das älteste seit 2 Jahren unangetastet ist. 
              </div>
            </div>
            
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Love for cooking.
                </h2>
                Von klein auf gabs zu Hause immer selbst gekochtes. Jedoch habe ich erst vor ein paar Jahren zusammen mit einem guten Freund
                den Spaß am selber kochen erkannt. Mittlerweile treffen wir uns regelmäßig um neue Gerichte zu probieren oder alte Favoriten wieder aufleben 
                zu lassen. Regelmäßiges kochen entweder in der Gruppe oder auch alleine schnell nach der Arbeit hilft mir zu entspannen.
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
                Naja, um die ganzen Kalorien des Essens und der Corona Zeit wieder abzubauen muss auch sport gemacht werden.
                Boudlern ist seit 3 Jahren mein absoluter lieblings Sport, da hier eine Problemlösende Denkweise kombiniert wird mit 
                einem ganz Körper workout. Die Community ist unfassbar hilfsbereit und liebenswürdig. Kann jedem nur empfehlen es selbst auszuprobieren.
              </div>
            </div>
    
            <div className="about__card-left" onClick={handleClick}>
              <div className="about__card-text">
                <h2>
                  Love for coding.
                </h2>
                Obwohl ich seit kleinauf von Computer fasziniert bin und Wirtschaftsinformatik studiert habe hat es bei mir so richtig erst während dem Master 
                klick gemacht. Bei der Bearbeitung eines Moduls namens "Compilerbau" wurde erstmal ein größeres Projekt entwicklet, was unfassbar knifflig und kompliziert 
                war, aber auch enormen Spaß gemacht hat. Anschließend habe ich während meiner Masterarbeit an einem Java-Tool gearbeitet, was mit hilfe von einem R-Server 
                Threads clustert nach Laufzeitverhalten. Währenddessen habe ich in meinem Studentenjob ein weiteres Tool entwicklet, was aus Excel Tabellen unterschiedlichste
                Word Tabellen erstellt mit Hilfe von Java, Powerquery und Html-Templates. 
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
