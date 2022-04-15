import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaSteam} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <a href='https://steam.com' target="_blank"><FaSteam/></a>
    </div>
  )
}

export default HeaderSocials