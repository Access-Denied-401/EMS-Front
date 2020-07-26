import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
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
      </nav>
    </>
  );
};


export default Header;
