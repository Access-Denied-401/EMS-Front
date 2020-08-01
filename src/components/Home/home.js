/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import HomeInfo from '../HomeInfo/homeInfo';
import CompanyValues from '../companyValues/companyValues';
import './home.scss';
import HomePosts from '../homePosts/homePosts';
import {connect} from 'react-redux';
import {userSignIn} from '../../store/actions';


const Home = (props) => {

  useEffect(()=> {
    props.userSignIn();
  });
  return (
    <>
      <Slider />
      <CompanyValues />
      <HomeInfo />
      <HomePosts />
    </>
  );
};

const mapDisPatchToprops = {userSignIn};

export default connect(null, mapDisPatchToprops) (Home);
