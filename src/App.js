import React from 'react';
import './App.css';
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
      <div className="gradient__bg">
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
