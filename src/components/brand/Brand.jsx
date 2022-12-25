import React from 'react';
import './brand.css';
import { github, medium, twitter } from './imports'

const Brand = () => {
  return (
    <div className='ugport__brand brand_padding'>
      <div>
        <a href="#Github"><img src={github} alt='GitHub' /></a>
      </div>
      <div>
        <a href="#Medium"><img src={medium} alt='Medium' /></a>
      </div>
      <div><a
        a href="#Twitter"><img src={twitter} alt='Twitter' /></a>
      </div>
    </div>
  )
}

export default Brand