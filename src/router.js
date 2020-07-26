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

      <Route path="/financialManagement" exact>
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