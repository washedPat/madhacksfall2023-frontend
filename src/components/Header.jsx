import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = ({ loggedIn }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">ParknRent</Link>
        </div>
        <div className="navigation">
          {loggedIn != null ? (
            <>
            <Link to="/Logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/Register">Register</Link> | <Link to="/Login">Login</Link>
            </>
          )}
          | <Link to="/Listings">Listings</Link> | <Link to="/MyRentals">My Rentals</Link> | <Link to="/Profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
