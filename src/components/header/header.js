/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Auth from './../../store/auth';
import {userSignOut} from './../../store/actions';
import Show from '../show/show';
import './header.scss';



const Header = (props) => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <img id="logo" src="../../../assest/ems.png" alt="logo" />
          <a className="navbar-brand" href="/">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home </Link>
              </li>
              <Auth capability='read'>
                <li className="nav-item">
                  <Link className="nav-link" to="/Administration">Administration</Link>
                </li>
              </Auth>
              
              <li className="nav-item">
                <Link className="nav-link" to="/financials">Financial Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <Show condition={!props.savedUser.loggedIn}>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
              </Show>
              <Show condition={props.savedUser.loggedIn}>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={props.userSignOut}>Sign Out</Link>
                </li>
              </Show>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
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
