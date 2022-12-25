import React from 'react';
import './brand-small.css';
import { github_small, medium_small, twitter_small } from './imports'

const BrandSmall = () => {
  return (
    <div className='ugport__brand-small brand_padding'>
      <div>
        <a href="#Github"><img src={github_small} alt='GitHub' /></a>
      </div>
      <div>
        <a href="#Medium"><img src={medium_small} alt='Medium' /></a>
      </div>
      <div><a
        a href="#Twitter"><img src={twitter_small} alt='Twitter' /></a>
      </div>
    </div>
  )
}

export default BrandSmall