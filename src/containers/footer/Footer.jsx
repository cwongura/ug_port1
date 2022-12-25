import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='ugport__footer section__padding'>
      <div className='ugport__footer-heading'>
        <h1 className='gradient__text'>Do you want to learn more?</h1>
      </div>

      <div className='ugport__footer-button'>
        <p>Download full resume</p>
      </div>

      {/* <div className='ugport__footer-links'>
        <div className='ugport__footer-links_logo'>
          <img src={ugportLogo} alt='logo' />
          <p> Bangkok, Thailand </p>
        </div>

        <div className='ugport__footer-links_div'>
          <h4> Links </h4>
          <p> Overons </p>
          <p> Social Media </p>
          <p> Counters </p>
          <p> Contact </p>
        </div>

        <div className='ugport__footer-links_div'>
          <h4> Company </h4>
          <p> Terms & Conditions </p>
          <p> Privacy Policy </p>
          <p> Contact </p>
        </div>

        <div className='ugport__footer-links_div'>
          <h4> Get in touch </h4>
          <p> Crechterwoord K12 182 DK Alknjkcb </p>
          <p> 085-132567 </p>
          <p> info@payme.net </p>
        </div>
      </div> */}

      <div className='ugport__footer-copyright'>
        <p>© 2022 - All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer