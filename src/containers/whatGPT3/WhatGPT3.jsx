import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

// importing the icon used
import academicIcon from '../../assets/diploma.png';
import awardIcon from '../../assets/award.png';
import sportIcon from '../../assets/sports.png';
import musicIcon from '../../assets/music-instrument.png';

const aboutMeContent = [
  {
    'content': 'The first test'
  },
  {
    'content': 'The second test'
  }
];

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-features'>
        <Feature title="About Me" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          Snippets of my achievements, activities, and skill sets
        </h1>
        <div className='gpt3__whatgpt3-button'>
          <a href="#blog"><button type="button"> Highlights </button></a>
        </div>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title="Academics" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." isIconProvided={true} icon={academicIcon} isList={true} listText={aboutMeContent}/>
        <Feature title="Accolades" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" isIconProvided="true" icon={awardIcon}/>
        <Feature title="Sports" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" isIconProvided="true" icon={sportIcon}/>
        <Feature title="Music" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" isIconProvided="true" icon={musicIcon} />
      </div>
    </div>
  )
}

export default WhatGPT3