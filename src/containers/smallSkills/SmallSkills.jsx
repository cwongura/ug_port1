import React from 'react';
import { Feature } from '../../components';
import './smallSkills.css';

const smallSkillsData = [
  {
    title: 'Coursera certificates',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    isList: true,
    listContent: [
      {
        'content': 'Machine Learning by Andrew Ng'
      },
      {
        'content': 'Programming for Everybody (Getting Started with Python) by Charles Severance'
      },
      {
        'content': 'The Science of Well-Being by Laurie Santos'
      },
      {
        'content': 'Introduction to Financial Accounting by Brian J Bushee'
      },
      {
        'content': 'Google IT Support Professional Certificate by Google'
      }
    ]
  },
  {
    title: 'Languages',
    text: 'Some texts',
    isList: true,
    listContent: [
      {
        'content': 'Thai (Native)'
      },
      {
        'content': 'English (Native)'
      },
      {
        'content': 'Mandarin (Intermediate)'
      }
    ]
  },
  {
    title: 'Computer skills',
    text: 'Some text',
    isList: true,
    listContent: [
      {
        'content': 'Proficient: Python'
      },
      {
        'content': 'Intermediate: Java, ReactJS, React Native, Angular'
      }
    ]
  },
  {
    title: 'Favorite quote',
    text: '"The best engineer is a composite ... He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems." - Nathan W. Dougherty',
    isList: false
  }
]

const SmallSkills = () => {
  return (
    <div className='ugport__smallSkills section__padding' id="smallSkills">
      <div className='ugport__smallSkills-headings'>
        <h1 className='gradient__text'>Supplementary Skills, Experience, and Qualifications</h1>
        <p>"Small things, done with great love, can change the world." - Mother Teresa</p>
      </div>

      <div className='ugport__smallSkills-container'>
        {smallSkillsData.map((item, index) => (
        <Feature title={item['title']} text={item['text']} key={item['title']+index} 
          isList={item['isList']} listText={item['listContent']}/>
        ))}
      </div>
    </div>
  )
}

export default SmallSkills