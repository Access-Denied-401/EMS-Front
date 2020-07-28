/* eslint-disable no-unused-vars */
import superagent from 'superagent';
let signUpUrl = 'https://ems-access-denied.herokuapp.com/signup';
let signInUrl = 'https://ems-access-denied.herokuapp.com/signin';

// SignUp Action
export const userSignUp = user => async dispatch => {
  return superagent.post(signUpUrl)
    .send(user)
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
};



const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});