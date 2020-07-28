/* eslint-disable no-unused-vars */
import {useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

let signUpUrl = 'https://lab-38.herokuapp.com';
let API = 'https://ems-access-denied.herokuapp.com';

// SignUp Action
export const userSignUp = user => async dispatch => {
  try {
    await fetch( `${API}/signup`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        'username': `${user.username}`,
        'email': `${user.email}`,
        'password': `${user.password}`,
        'image': `${user.image}`,
        'role': 'user',
      }),
    });    
  } catch (error) {
    console.log(error);
  }
};

export const userSignIn = user => async dispatch => {
  if(user){
    try {
      let results = await fetch( `${API}/signin`,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}`,
        }),
      });
      let jsonResult = await results.json();
      console.log(jsonResult.token);
      validateToken (jsonResult.token);
    } catch (error) {
      console.log(error);
    }
  }
  function validateToken (token) {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'ysecrettokenkey');
      setLoginState(true, token, user);
    } catch (error) {
      logout();
      console.log(error);
    }
  }
  
  function setLoginState (loggedIn, token, user){
    cookie.save('auth', token);
    dispatch(loginUser({loggedIn, token, user}));
  }
  
  function logout (){
    setLoginState(false, null, {});
  }

  const cookieToken = cookie.load('auth');
  const token = cookieToken || null; 
  validateToken(token);

  
};

// export const onReLoad = user => async dispatch => {
  
//   const cookieToken = cookie.load('auth');
//   const token = cookieToken || null; 
//   validateToken(token);

//   function validateToken (token) {
//     try {
//       let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'ysecrettokenkey');
//       setLoginState(true, token, user);
//     } catch (error) {
//       logout();
//       console.log(error);
//     }
//   }
  
//   function setLoginState (loggedIn, token, user){
//     cookie.save('auth', token);
//     dispatch(loginUser({loggedIn, token, user}));
//   }
  
//   function logout (){
//     setLoginState(false, null, {});
//   }


  
// };



export const loginUser = userObj => {
  console.log('hellooooooooooooooooooo');
  return (
    {
      type: 'SET_LOGIN',
      payload: userObj,
    });
};