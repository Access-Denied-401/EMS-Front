/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Administration">Administration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/financials">Financial Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign-in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign-up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About-us</Link>
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


export default Header;
