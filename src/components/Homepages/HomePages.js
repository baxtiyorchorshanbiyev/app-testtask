import React from 'react';
import Features from '../Features/Features';
import Main from '../Main/Main';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import TestTominal from '../TestTominal/TestTominal';
import Carousel from '../Carousel/Carouse';
const HomePages = () => {
  return (
    <div>
      <Main />
      <Features />
      <About />
      <Menu />
      <TestTominal />
      <Carousel />
      <Contact />
    </div>
  );
};

export default HomePages;