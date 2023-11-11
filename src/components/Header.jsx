import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import './Header.css'
const Header = ({ loggedin }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">ParknRent</Link>
        </div>
        <div className="navigation">
          {loggedin != null ? (
            <Link to="/Logout">Logout</Link>
          ) : (
            <>
              <Link to="/Register">Register</Link> | <Link to="/Login">Login</Link>
            </>
          )}
          | <Link to="/">Home</Link> | <Link to="/Listings">Listings</Link> | <Link to="/MyRentals">My Rentals</Link> | <Link to="/Profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

