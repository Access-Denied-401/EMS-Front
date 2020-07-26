/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import Header from '../Header/header';
import Footer from '../Footer/footer';
    

const Home = (props) => {
  return (
    <>
      <Header />
      <Slider />
      <Footer />
    </>
  );
};


export default Home;
