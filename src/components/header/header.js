/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import useAjax from '../hooks/ajaxHook';
import { Link, NavLink } from 'react-router-dom';
import Auth from './../../store/auth';
import {userSignOut} from './../../store/actions';
import Show from '../show/show';
import './header.scss';


const Header = (props) => {
  const [users, setUsers] = useState({});
  const {getUserProfile} = useAjax();

  useEffect (() => {
    getUserProfile().then(dbUsers =>{ 
      setUsers(dbUsers);
    });
  },[users]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <img id="logo" src="../../../assest/ems.png" alt="logo" />
          <a className="navbar-brand brand ems" href="/">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <Auth capability='read'>
                <li className="nav-item">
                  <a href={'http://ems-access-denied.herokuapp.com/chat.html?' + users.username }  className=" btnAll-r btn-1-r aar">Chat</a>
                </li>
              </Auth>
              <li className="nav-item">
                <Link to="/" className=" btnAll-r btn-1-r aar">Home</Link>
              </li>
              <Auth capability='manage'>
                <li className="nav-item">
                  <Link className=" btnAll-r btn-1-r aar" to="/Administration">Administration</Link>
                </li>
              </Auth>
              <Auth capability='account'>
                <li className="nav-item">
                  <Link className=" btnAll-r btn-1-r aar" to="/financialmanagement">Financial Management</Link>
                </li>
              </Auth>

              <Auth capability='read'>
                <li className="nav-item">
                  <Link className=" btnAll-r btn-1-r aar" to="/profile">Profile</Link>
                </li>
              </Auth>

              <Show condition={!props.savedUser.loggedIn}>
                <li className="nav-item">
                  <Link className=" btnAll-r btn-1-r aar" to="/signin">Sign In</Link>
                </li>
              </Show>
              <li className="nav-item">
                <Link className=" btnAll-r btn-1-r aar" to="/about-us">About Us</Link>
              </li>
              <Show condition={props.savedUser.loggedIn}>
                <li className="nav-item">
                  {console.log(props.savedUser.user)}
                  <Link className=" btnAll-r btn-1-r aar" to="/" onClick={props.userSignOut}>Sign Out</Link>
                  <img className="signInImage" onError={(e) => { e.target.onerror = null; e.target.src = 'https://www.jayone.org/assets/profiles/user-default.png'; }} src={users.image || 'https://www.jayone.org/assets/profiles/user-default.png'} alt='' />
                </li>
              </Show>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          </div>
        </div>
      </header>
     
    </>
  );
};

const mapDispatchToProps= {userSignOut};

const mapStateToProps = (state) => ({
  savedUser: state.loginReducer,
});

export default connect (mapStateToProps, mapDispatchToProps)(Header);
