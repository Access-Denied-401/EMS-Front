/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import Administration from './components/Administration/administration';
import FinancialManagement from './components/Financial-Management/financial';
import Profile from './components/Profile/profile';
import Signin from './components/Sign-in/signin';
import Signup from './components/Sign-up/signup';
import Aboutus from './components/About-Us/aboutus';


const Routes = (props) => {
  return (
    <>
      <Route path="/" exact>
                how are you
      </Route>

      <Route path="/administration" exact>
        <Administration />
      </Route>

<<<<<<< HEAD
      <Route path="/financialManagement" exact>
=======
      <Route path="/financials" exact>
>>>>>>> 48986eead5fc1d12d3ff43f1b2f6f13874e3768b
        <FinancialManagement />
      </Route>

      <Route path="/profile" exact>
        <Profile />
      </Route>

      <Route path="/signin" exact>
        <Signin />
      </Route>

      <Route path="/signup" exact>
        <Signup />
      </Route>

      <Route path="/aboutus" exact>
        <Aboutus />
      </Route>
    </>
  );
};

export default Routes;