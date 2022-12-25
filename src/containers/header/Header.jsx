import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import profilePicture from '../../assets/My project-1.png';
import {Brand} from '../../components';

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
          This website was built with <i>React</i>. Visit my <a href="https://github.com/cwongura?tab=repositories" target="_blank"> <u>Github</u> </a> page to see the source code and other projects. Follow my publication on <a href="#"> <u>Medium</u> </a> and my <a href="#"><u>Twitter</u></a>.
        </p>

        {/* <div className='ugport__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type="button"> Get Started </button>
        </div>

        <div className='ugport__header-content__people'>
          <img src={people} alt='people'/>
          <p> 1,600 people requested access a visit in last 24 hours </p>
        </div> */}

        <Brand />
      </div>

      <div className='ugport__header-image'>
        <img src={profilePicture} alt='Big Profile'/>
      </div>
      
    </div>
  )
}

export default Header