import React from 'react';
import './feature.css';

const Feature = ({ title, text, isIconProvided=false, icon, isList=false, listText }) => {

  return (
    <div className='ugport__features-container__feature'>
      <div className='ugport__features-container__feature-header'>
        <div className='ugport__features-container__feature-title'>
          <div />
          <h1>{title}</h1>
        </div>
        <div className='ugport__features-container__feature-icon'>
          {
          isIconProvided ?
          (<img src={icon} alt={"icon for"+title}/>) :
          ("")
          }
        </div>
      </div>
      <div className='ugport__features-container__feature-text'>
        {
          isList ?
          (<ul>
            {listText.map((item, index) => (
              <li key={index}> {item['content']} </li>
            ))}
          </ul>
          ) :
          (<p>{text}</p>)
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default Feature