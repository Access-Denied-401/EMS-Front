/* eslint-disable no-unused-vars */
import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import HomeInfo from '../HomeInfo/homeInfo';
import CompanyValues from '../companyValues/companyValues';
import './home.scss';



const Home = (props) => {
  return (
    <>
      <Slider />
      <CompanyValues />
      <HomeInfo />
    </>
  );
};


export default Home;
