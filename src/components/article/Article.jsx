import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, content=[{}], 
                isBig=false, isTag=false, tagsContent=[],
                isLink=false, linkURL}) => {
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
              <h5 key={index+'blog'}>{item}</h5>
            ))
          }
        </div>
        
        { (isTag || isLink) && (
          <div className='ugport__blog-container_footer'>
            {isTag && (
              <div className='ugport__blog-container_footer-tags'>
                <p> Tags: </p>
                {
                  tagsContent.map((item, index) => (
                    <button key={index+'tags'}> {item}</button>
                  ))
                }
              </div>)
            }

            {isLink && (
              <p><a href={linkURL}> Read More </a></p>
            )}
          </div>
        )}
      </div>

    </div>
  )
}

export default Article