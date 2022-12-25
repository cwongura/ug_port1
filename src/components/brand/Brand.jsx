import React from 'react';
import './brand.css';
import { github, medium, twitter } from './imports'
import { githubURL, mediumURL, twitterURL } from '../../all-url';


const Brand = () => {
  return (
    <div className='ugport__brand brand_padding'>
      <div>
        <a href={githubURL} target="_blank" rel="noreferrer"><img src={github} alt='GitHub' /></a>
      </div>
      <div>
        <a href={mediumURL} target="_blank" rel="noreferrer"><img src={medium} alt='Medium' /></a>
      </div>
      <div><a
        a href={twitterURL} target="_blank" rel="noreferrer"><img src={twitter} alt='Twitter' /></a>
      </div>
    </div>
  )
}

export default Brand