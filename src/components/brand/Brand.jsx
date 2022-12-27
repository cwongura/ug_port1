import React from 'react';
import './brand.css';
import { github, medium, twitter, linkedIn } from './imports'
import { githubURL, mediumURL, twitterURL, linkedInURL } from '../../all-url';


const Brand = () => {
  return (
    <div className='ugport__brand brand_padding'>
      <div>
        <a href={githubURL} target="_blank" rel="noreferrer"><img src={github} alt='My GitHub' /></a>
      </div>
      <div>
        <a href={mediumURL} target="_blank" rel="noreferrer"><img src={medium} alt='My Medium' /></a>
      </div>
      <div>
        <a href={twitterURL} target="_blank" rel="noreferrer"><img src={twitter} alt='My Twitter' /></a>
      </div>
      <div>
        <a href={linkedInURL} target="_blank" rel="noreferrer"><img src={linkedIn} alt='My LinkedIn' /></a>
      </div>
    </div>
  )
}

export default Brand