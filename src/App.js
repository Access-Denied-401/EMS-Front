/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <Header />
      <Routes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
