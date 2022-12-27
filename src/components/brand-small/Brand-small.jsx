import React from 'react';
import './brand-small.css';
import { github_small, medium_small, twitter_small, linkedin_small } from './imports'
import { githubURL, mediumURL, twitterURL, linkedInURL } from '../../all-url';

const BrandSmall = () => {
  return (
    <div className='ugport__brand-small brand_padding'>
      <div>
        <a href={githubURL} target="_blank" rel="noreferrer"><img src={github_small} alt='GitHub_small_logo' /></a>
      </div>
      <div>
        <a href={mediumURL} target="_blank" rel="noreferrer"><img src={medium_small} alt='Medium_small_logo' /></a>
      </div>
      <div>
        <a href={twitterURL} target="_blank" rel="noreferrer"><img src={twitter_small} alt='Twitter_small_logo' /></a>
      </div>
      <div>
        <a href={linkedInURL} target="_blank" rel="noreferrer"><img src={linkedin_small} alt='LinkedIn_small_logo' /></a>
      </div>
    </div>
  )
}

export default BrandSmall