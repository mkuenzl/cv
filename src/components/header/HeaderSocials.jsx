import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaSteam} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/moritz-kuenzl' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/mkuenzl' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials