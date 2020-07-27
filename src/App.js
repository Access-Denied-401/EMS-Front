/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Routes from './router';
import Signin from './components/Sign-in/signin';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <Header />
      <Routes />
      <Signin />
      <Footer />
    </>
  );
}

export default App;
