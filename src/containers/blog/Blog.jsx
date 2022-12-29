import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const blog1Content = {
  'date': 'Summer 2013',
  'title': "Develop new calibration method due to non-common path abberations in Robo-AO instrument",
  'content': ["Robo-AO, or robotic adaptive optics, is a research instrument mounted to Palomar Observatory's P60 telescope. Its primary objective is to mitigate the effects of the Earth's non-uniform atmosphere, allowing ground-based telescopes to acquire diffraction-limited pictures.",

  "During my internship, I assisted with a variety of tasks, including data analysis, programming, and instrument maintenance. I also had the chance to work on my own research project, studying the atmospheres of exoplanets using data collected by the Robo-AO system.",

  "In addition to the technical skills I developed during my internship, I also gained valuable experience working as part of a team and collaborating with experts in the field. I am grateful for the opportunity to have worked with the talented and dedicated team at Palomar Observatory, and am excited to see where my experience at the Robo-AO program will take me in the future."],
  'isTag': true,
  'tagsContent': ['Internship', 'Python', 'Leadership'],
  'isLink': true,
  'linkURL': "#showCase1"
};

const blog2Content = {
  'date': "Summer 2021 - Now",
  'title': "Develop and deploy trading bots with hyperoptimized parameters",
  'content': ["Through this project, I gained valuable experience in coding and data analysis, as well as an understanding of the complexities and risks of automated trading. I was able to see the bot make successful trades, and learned how to fine-tune its algorithms to improve its performance."],
  'isTag': true,
  'tagsContent': ['Python', 'Algo-trading']
}

const blog3Content = {
  'date': "Sep 26, 2021",
  'title': "Organize several mobile medication units to rural areas in Thailand",
  'content': ['I assisted with a variety of tasks, including taking vital signs, administering medication, and providing patient education. I also had the chance to work with a diverse group of patients, including children, seniors, and individuals with chronic conditions.'],
  'isTag': true,
  'tagsContent': ['Community services', 'Medicine'],
  'isLink': false,
  'linkURL': "#showCase1"
}

const blog4Content = {
  'date': "Summer 2020 - Now",
  'title': "Develop & maintain website for EatUp family restaurant",
  'content': ["Throughout the process, I gained valuable experience in web design and project management, as well as an understanding of the needs and preferences of the restaurant's customers. I was proud to see the website go live, and received positive feedback from both the restaurant and its customers."],
  'isTag': true,
  'tagsContent': ['ReactJS', 'Redux', 'Services']
}


const blog5Content = {
  'date': "Summer 2018",
  'title': "Develop a face recognition program",
  'content': ["I then set to work designing and coding the program, using libraries such as opencv and tensorflow to handle image processing and machine learning tasks. I also gathered a dataset of images to use for training and testing the program."],
  'isTag': true,
  'tagsContent': ['Python', 'OpenCV']
}


const Blog = () => {
  return (
    <div className='ugport__blog section__padding' id="blog">
      <div className='ugport__blog-heading'>
        <h1 className='gradient__text'> My proudest achievements</h1>
      </div>

      <div className='ugport__blog-container'>
        <div className='ugport__blog-container_groupA'>
          <Article imgURL={blog01} date={blog1Content.date} 
            title={blog1Content.title} isBig={true} 
            content={blog1Content.content}
            isTag={blog1Content.isTag} 
            tagsContent={blog1Content.tagsContent}
            isLink={blog1Content.isLink}
            linkURL={blog1Content.linkURL} />
        </div>

        <div className='ugport__blog-container_groupB'>
          <Article imgURL={blog02} date={blog2Content.date} 
            title={blog2Content.title} isBig={false}
            content={blog2Content.content}
            isTag={blog2Content.isTag}
            tagsContent={blog2Content.tagsContent} />

          <Article imgURL={blog03} date={blog3Content.date} 
            title={blog3Content.title} isBig={false}
            content={blog3Content.content}
            isTag={blog3Content.isTag}
            tagsContent={blog3Content.tagsContent}
            isLink={blog3Content.isLink}
            linkURL={blog3Content.linkURL} />

          <Article imgURL={blog04} date={blog4Content.date} 
            title={blog4Content.title} isBig={false}
            content={blog4Content.content}
            isTag={blog4Content.isTag}
            tagsContent={blog4Content.tagsContent} />

          <Article imgURL={blog05} date={blog5Content.date}
            title={blog5Content.title} isBig={false}
            content={blog5Content.content}
            isTag={blog5Content.isTag}
            tagsContent={blog5Content.tagsContent} />
        </div>
      </div>
    </div>
  )
}

export default Blog