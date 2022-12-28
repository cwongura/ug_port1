import React from 'react';
import './footer.css';

import resumeFile from '../../assets/physics_Data_booklet.pdf';

const Footer = () => {
  return (
    <div className='ugport__footer section__padding'>
      <div className='ugport__footer-heading'>
        <h1 className='gradient__text'>Do you want to learn more?</h1>
      </div>

      <a href={resumeFile} download="Chatarin Portfolio">
        <div className='ugport__footer-button'>
          <p>Download full resume</p>
        </div>
      </a>

      <div className='ugport__footer-copyright'>
        <p>© 2022 - All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer