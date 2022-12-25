import React from 'react';
import './header.css';
import profilePicture from '../../assets/My project-1.png';
import { Brand } from '../../components';
import { githubURL, mediumURL, twitterURL } from '../../all-url';

const Header = () => {
  return (
    <div className='ugport__header section__padding' id="home">
      <div className='ugport__header-content'>
        <h1 className="gradient__text">
          Hello, I'm Chatarin
        </h1>
       
        <h5>
        A scientifically curious and gifted student with a flair for algorithmic trading and front-end development. 
        </h5>
        <p>
          This website was built with <i>React</i>. Visit my <a href={githubURL} target="_blank" rel="noreferrer"><u>Github</u></a> page to see the source code and other projects. Follow my publication on <a href={mediumURL} target="_blank" rel="noreferrer"><u>Medium</u></a> and my <a href={twitterURL}><u>Twitter</u></a>.
        </p>

        <Brand />
      </div>

      <div className='ugport__header-image'>
        <img src={profilePicture} alt='Big Profile'/>
      </div>
      
    </div>
  )
}

export default Header