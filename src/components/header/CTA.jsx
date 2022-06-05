import React from 'react'
import CV from '../../assets/curriculum-vitae-english-kuenzl.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        
        <a href={CV} download>
          <button className='btn'>Download CV</button>
        </a>
        
        <a href='#contact'>
          <button className='btn btn-primary'>Let's Talk</button>
        </a>
    </div>
  )
}

export default CTA