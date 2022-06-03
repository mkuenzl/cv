import React from 'react'
import './header.css'
import CTA from './CTA'
import PersonalPicture from '../../assets/pictures/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Moritz Künzl</h1>
        <h5 className='text-light'>a future developer</h5>
        <CTA />
        <HeaderSocial/>

        {/*<div className='personalPicture'>
          <img src={PersonalPicture} alt="Myself" />
  </div>*/}

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header