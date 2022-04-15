import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BiMessageDots} from 'react-icons/bi'
import { useState } from 'react'

/* TODO: Change css class on page scrolling */
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a> 
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a> 
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a> 
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a> 
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a> 
    </nav>
  )
}

export default Nav