import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      
      <div className='gpt3__possibility-content'>
        <h4>My research fellowship with Robo-AO</h4>
        <h1 className='gradient__text'>Correcting atmosphere for a perfect image</h1>
        <p> Adaptive optics systems are used to compensate for the distortions caused by Earth's atmosphere, which can blur and distort images of celestial objects. By using lasers to measure and correct for these distortions in real-time, adaptive optics systems can produce high-resolution images of celestial objects that are much sharper than those obtained using traditional telescopes. </p>
        <p>
        Non-common path aberration (NCPA) is a type of distortion that can affect the performance of adaptive optics systems. NCPA occurs when the light path through the adaptive optics system differs for different wavelengths of light, resulting in different levels of distortion for different colors. To address NCPA in the Robo-AO system, researchers have used a variety of techniques, including the use of specialized optics, computer simulations, and machine learning algorithms. By minimizing NCPA, researchers can improve the accuracy and resolution of images obtained using the Robo-AO system, and enhance our understanding of celestial objects.</p>

        <h4> Bringing space telescope quality to ground-base telescopes </h4>
      </div>
    </div>
  )
}

export default Possibility