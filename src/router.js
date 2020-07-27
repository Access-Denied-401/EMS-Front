/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Administration from './components/Administration/administrationhome/administration';
import AdminAddUser from './components/Administration/admin-add-user/admin-add-user';
import Home from './components/Home/home';
import FinancialManagement from './components/Financial-Management/financial';
import Profile from './components/Profile/profile';
import Signin from './components/Sign-in/signin';
import Signup from './components/Sign-up/signup';
import Aboutus from './components/About-Us/aboutus';


const Routes = (props) => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/administration" component={Administration} exact />
     
      <Route path='/adduser' component= {AdminAddUser} />

      <Route path="/financials" component={FinancialManagement} exact />

      <Route path="/profile" component={Profile} exact />

      <Route path="/signin" component={Signin} exact />

      <Route path="/signup" component={Signup} exact />

      <Route path="/aboutus" component={Aboutus} exact />
    </>
  );
};

export default Routes;