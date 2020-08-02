/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { userSignIn} from '../../store/actions';
import useAjax from '../hooks/ajaxHook';
import './signin.scss';



function Signin(props) {

  const {userSignIn} = props;
  const {userSignUp} = useAjax();
  let [newUserSignUp, setUserSignup] = useState({});
  let[newUserSignIn, setUserSignIn] = useState({});
  
  const _changeSignUpInput = (event) => {
    setUserSignup({...newUserSignUp, [event.target.name]: event.target.value});
  };

  const _changeSignInInput = (event) => {
    setUserSignIn({...newUserSignIn, [event.target.name]: event.target.value});
  };

  const _handleSignup = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    userSignUp(newUserSignUp);
  };

  const _handleSignin = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    userSignIn(newUserSignIn);
  };

  useEffect (() => {
    console.log('signIn');
    userSignIn();
  },[userSignIn]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card-signin">
            
            <div className="login-box">
              <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in"/><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-space">

                  <form onSubmit={_handleSignin}>
                    <div className="login">
                      <div className="group"> <label htmlFor="user" className="label">User Name</label> <input onChange={_changeSignInInput} name='username' id="user" type="text" className="input" placeholder="Enter your email"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Password</label> <input onChange={_changeSignInInput} name='password' id="pass" type="password" className="input" data-type="password" placeholder="Enter your password"/> </div>
                      <div className="group"> <input id="check" type="checkbox" className="check"/> <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> </div>
                      <div className="group"> <input type="submit" className="button" value="Sign In"/> </div>
                      <div className="hr"></div>
                      <div className="foot"> <a href="/">Forgot Password?</a> </div>
                    </div>
                  </form>

                  <form onSubmit={_handleSignup}>
                    <div className="sign-up-form">
                      <div className="group"> <label htmlFor="user" className="label">Username</label> <input onChange={_changeSignUpInput} name='username' id="user" type="text" className="input" placeholder="Create your Username"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Email Address</label> <input onChange={_changeSignUpInput} name='email' id="pass" type="text" className="input" placeholder="Enter your email address"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Image</label> <input onChange={_changeSignUpInput} name='image' id="pass" type="text" className="input" placeholder="Enter Your Image"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Password</label> <input onChange={_changeSignUpInput} name='password' id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> </div>
                      {/* <div className="group"> <label htmlFor="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div> */}
                      <div className="group"> <button className="button" value="Sign Up">SIGN UP</button> </div>
                      <div className="hr"></div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {userSignIn};

const mapStateToProps = (state) => ({
  logInReducer: state.logInReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
