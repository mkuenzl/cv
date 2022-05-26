import React from 'react'
import StarRating from './Rating'
import './skill.css'
import {IoShieldCheckmarkOutline} from 'react-icons/io5'
import Skills from '../../assets/skill_data.json'

const Experienced = () => {
  const ts = Skills.toolskills
  const cs = Skills.codeskills

  return (
    <section id='experience'>
      <h5>What Things I Believe I Am Good At</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
      <div className="experience__code">
          <h3>Code</h3>
          <div className="experience__content">
            {cs.map(skill => (
              <article className='experience__details'>
              <IoShieldCheckmarkOutline className='experience__details-icon'/>
              <div>
                <h4>{skill.name}</h4>
                <small className='text-light'>{skill.text}</small>
                <StarRating rate={skill.rating} />
              </div>
            </article>
            ))}
          </div>
        </div>

        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            {ts.map(skill => (
              <article className='experience__details'>
              <IoShieldCheckmarkOutline className='experience__details-icon'/>
              <div>
                <h4>{skill.name}</h4>
                <small className='text-light'>{skill.text}</small>
                <StarRating rate={skill.rating} />
              </div>
            </article>
            ))}
          </div>
        </div>

      </div>
      </section>
  )
}

export default Experienced