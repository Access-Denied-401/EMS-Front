/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import Routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <Home />
      <Routes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
