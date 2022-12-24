import React from 'react';
import './feature.css';

const Feature = ({ title, text, isIconProvided=false, icon }) => {

  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-header'>
        <div className='gpt3__features-container__feature-title'>
          <div />
          <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__feature-icon'>
          {
          isIconProvided ?
          (<img src={icon}/>) :
          (<div></div>)
          }
        </div>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Feature