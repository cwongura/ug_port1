import React from 'react';
import './quote.css';

import quoteIcon from '../../assets/icon-quotes.png'

const Quote = () => {
  return (
    <div className='ugport__quote section__margin'>
      <div className='ugport__quote-content'>
        <p> -- <i>Nicholas St. John Green</i></p>
        <h3>The engineer is a creator of machines, but he is also a master of efficiency.</h3>
      </div>
      <div className='ugport__quote-icon'>
        <img src={quoteIcon} alt='quotes' />
      </div>
    </div>
  )
}

export default Quote