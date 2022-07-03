import React from 'react'
import './header.css'
import CTA from './CTA'
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

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header