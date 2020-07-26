import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Administration">Administration</Link>
            </li>
            <li>
                <Link to="/financials">Financia Manage</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/signin">Sign-in</Link>
            </li>
            <li>
                <Link to="/signup">Sign-up</Link>
            </li>
            <li>
                <Link to="/signout">Sign-out</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
