/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import Administration from './components/Administration/administrationhome/administration';
import Home from './components/Home/home';
import FinancialManagement from './components/Financial-Management/financial';
import Profile from './components/Profile/profile';
import EditProfile from './components/Profile/editProfile';
import Feedback from './components/Profile/feedback';
import Signin from './components/Sign-in/signin';
import Signup from './components/Sign-up/signup';
import About from './components/About-Us/aboutus';


const Routes = (props) => {
  return (
    <>
      <Route path="/" component={Home} exact />

      <Route path="/administration" component={Administration} exact />

      <Route path="/financials" component={FinancialManagement} exact />

      <Route path="/profile" component={Profile} exact />

      <Route path="/profile/EditProfile" component={EditProfile} exact />

      <Route path="/profile/Feedback" component={Feedback} exact />

      <Route path="/signin" component={Signin} exact />

      <Route path="/signup" component={Signup} exact />

      <Route path="/aboutus" component={About} exact />
    </>
  );
};

export default Routes;