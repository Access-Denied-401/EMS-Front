/* eslint-disable no-unused-vars */
let signUpUrl = 'https://ems-access-denied.herokuapp.com/signup';
let signInUrl = 'https://ems-access-denied.herokuapp.com/signin';

// SignUp Action
export const userSignUp = user => {
  console.log(user);
  return dispatch => {
    return fetch (signUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };
};



const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});