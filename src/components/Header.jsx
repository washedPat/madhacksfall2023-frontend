import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = ({ loggedIn }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Plot</Link>
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
          | <Link to="/Listings">Rent a Listing</Link> | <Link to="/MyRentals">My Listings</Link> | <Link to="/Profile">Booked Listings</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

