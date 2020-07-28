/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {userSignUp} from '../../store/actions';
import './signin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



function Signin(props) {

  let [user, setUser] = useState({});
  const _changeInput = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  const _handleSubmit = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    // console.log(user);
    props.userSignUp(user);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            
            <div className="login-box">
              <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in"/><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-space">

                  <form>
                    <div className="login">
                      <div className="group"> <label htmlFor="user" className="label">Email</label> <input id="user" type="text" className="input" placeholder="Enter your email"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password"/> </div>
                      <div className="group"> <input id="check" type="checkbox" className="check"/> <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> </div>
                      <div className="group"> <input type="submit" className="button" value="Sign In"/> </div>
                      <div className="hr"></div>
                      <div className="foot"> <a href="/">Forgot Password?</a> </div>
                    </div>
                  </form>

                  <form onSubmit={_handleSubmit}>
                    <div className="sign-up-form">
                      <div className="group"> <label htmlFor="user" className="label">Username</label> <input onChange={_changeInput} name='username' id="user" type="text" className="input" placeholder="Create your Username"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Email Address</label> <input onChange={_changeInput} name='email' id="pass" type="text" className="input" placeholder="Enter your email address"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Image</label> <input onChange={_changeInput} name='image' id="pass" type="text" className="input" placeholder="Enter Your Image"/> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Password</label> <input onChange={_changeInput} name='password' id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> </div>
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

const mapDispatchToprops = {userSignUp};

export default connect(null, mapDispatchToprops)(Signin);
