import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
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

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-headings'>
        <h1 className='gradient__text'>Here are some trivial achievements and skills. The admission officers probably won't read them.</h1>
        <p>Secondary title</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
        <Feature title={item['title']} text={item['text']} key={item['title']+index} 
          isList={item['isList']} listText={item['listContent']}/>
        ))}
      </div>
    </div>
  )
}

export default Features