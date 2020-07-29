/* eslint-disable no-unused-vars */
import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import HomeInfo from '../HomeInfo/homeInfo';
import CompanyValues from '../companyValues/companyValues';
import './home.scss';
import HomePosts from '../homePosts/homePosts';



const Home = (props) => {
  return (
    <>
      <Slider />
      <CompanyValues />
      <HomeInfo />
      <HomePosts />
    </>
  );
};


export default Home;
