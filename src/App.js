import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Blog />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  )
}

export default App