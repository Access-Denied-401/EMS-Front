/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './components/About-Us/aboutus';
import Routes from './router';
import Signin from './components/Sign-in/signin';
import Slider from './components/slider/slider';


function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />

     
    </>
  );
}

export default App;
