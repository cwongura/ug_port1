import React from 'react';

import { AboutMe, Blog, SmallSkills, Footer, Header, ShowCase1 } from './containers';
import { Quote, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <AboutMe />
      <Blog />
      <Quote />
      <SmallSkills />
      <ShowCase1 />
      <Footer />
    </div>
  )
}

export default App