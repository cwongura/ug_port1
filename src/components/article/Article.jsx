import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, content=[]}, isBig=false) => {
  return (
    <div className='ugport__blog-container_article'>
      <div className={isBig?'ugport__blog-container_article-bigImage':'ugport__blog-container_article-image'}>
        <img src={imgUrl} alt='blog' />
      </div>

      <div className='ugport__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          {
            content.map((item, index) => (
              <h5 key={index+'blog'}>{item['content']}</h5>
            ))
          }
        </div>

        <p> Read Full Article </p>
      </div>

    </div>
  )
}

export default Article