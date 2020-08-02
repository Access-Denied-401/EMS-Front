/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Slider from './slider/slider';
import HomeInfo from './HomeInfo/homeInfo';
import CompanyValues from './companyValues/companyValues';
import HomePosts from './homePosts/homePosts';
import {userSignIn} from '../../store/actions';
import './home.scss';


const Home = (props) => {

  useEffect(()=> {
    console.log('hi123');
    props.userSignIn();
  });
  return (
    <>
      {/* <Slider /> */}
      <CompanyValues />
      <HomeInfo />
      <HomePosts />
    </>
  );
};

const mapDisPatchToprops = {userSignIn};

export default connect(null, mapDisPatchToprops) (Home);
