import React from 'react';
import { Navbar, Brand, Cta } from './components';
import {
  Footer,
  Blog,
  Header,
  WhatGPT3,
  Features,
  Possibility,
} from './containers';

function App() {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
