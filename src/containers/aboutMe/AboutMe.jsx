import React from 'react';
import { Feature } from '../../components';
import './aboutMe.css';

// importing the icon used
import academicIcon from '../../assets/diploma.png';
import awardIcon from '../../assets/award.png';
import sportIcon from '../../assets/sports.png';
import musicIcon from '../../assets/music-instrument.png';

const academicsContent = [
  {
    'content': "World's highest score in IGCSE Mathematics, Computer science, and Physics (Grade 10)"
  },
  {
    'content': 'High Distinction in Australian National Chemistry Quiz (Grade 10-12)'
  },
  {
    'content': 'High Honors from Holderness School, NH (Grade PG)'
  }
];

const serviceContent = [
  {
    'content': 'Translator for Tsunami Victims alleviation program'
  },
  {
    'content': 'Prepare and serve food for Meals for Many charity'
  },
  {
    'content': 'Organize mobile medication unit to rural areas in Thailand'
  }
];

const sportsContent = [
  {
    'content': 'Captain of junior varsity football team at Holderness School'
  },
  {
    'content': 'Won second place at South East Asia Student Activities Conference (SEASAC) in volleyball'
  }
]

const musicContent = [
  {
    'content': 'Proficient in Violin, Piano, and Cello'
  },
  {
    'content': 'Member of Thai Youth Orchestra (1st chair of 2nd violin)'
  },
  {
    'content': 'Member of International Youth Orchestra (1st chair of 2nd violin)'
  },
  {
    'content': 'Member of Saparnluang Church Orchestra (concert master)'
  }
]

const AboutMe = () => {
  return (
    <div className='ugport__aboutMe section__margin' id="aboutMe">
      <div className='ugport__aboutMe-features'>
        <Feature title="About Me" text="I'm excited to take my passion for engineering to the next level by pursuing a degree in the field. I'm confident that my strong foundation in math and science, combined with my drive and determination, will make me a valuable asset to any engineering program." />
      </div>

      <div className='ugport__aboutMe-heading'>
        <h1 className='gradient__text'>
          Snippets of my achievements, activities, and skill sets
        </h1>
        <div className='ugport__aboutMe-button'>
          <a href="#blog"><button type="button"> Download full resume </button></a>
        </div>
      </div>

      <div className='ugport__aboutMe-container'>
        <Feature title="Accolades" 
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." 
          isIconProvided={true} icon={academicIcon} 
          isList={true} listText={academicsContent}/>

        <Feature title="Services" 
          text="Some text" 
          isIconProvided={true} icon={awardIcon}
          isList={true} listText={serviceContent}/>

        <Feature title="Sports" 
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" 
          isIconProvided={true} icon={sportIcon}
          isList={true} listText={sportsContent}/>

        <Feature title="Music" 
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" 
          isIconProvided={true} icon={musicIcon} 
          isList={true} listText={musicContent}/>
      </div>
    </div>
  )
}

export default AboutMe