import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaSteam} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Start</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <a href='https://steam.com' target="_blank"><FaSteam/></a>
      </div>
      
      <div className="footer_copyright">
        <small>&copy;Based on Tutorial.</small>
        <small>Brand icons from skills section are from <a href="https://icons8.de/" title="Icons8.de">Icons8</a></small>
        <small><a href="https://www.flaticon.com/free-icons/dna" title="dna icons">Dna icons created by Freepik - Flaticon</a></small>
        <small><a href="https://www.flaticon.com/free-icons/webpage" title="webpage icons">Webpage icons created by Freepik - Flaticon</a></small>
        <small><a href="https://www.flaticon.com/free-icons/raspberry-pi" title="raspberry pi icons">Raspberry pi icons created by Freepik - Flaticon</a></small>
      </div>

    </footer>
  )
}

export default Footer