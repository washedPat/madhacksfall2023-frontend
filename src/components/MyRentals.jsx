
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyRentals.css';
import RentalsCard from './RentalsCard';
import LoggedIn from '../contexts/LoggedIn';

const MyRentals = () => {
  const [myListings, setMyListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();



  useEffect(() => {
    if (loggedIn) {
      fetch(`https://plot.fly.dev/api/getUserListings?username=${loggedIn}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then((data) => setMyListings(data));
    }
  }, [myListings]); 

  if (loggedIn === null) {
    return (
      <div className="mainContainer">
        <div className="bodyContainer">
          <p>Please login to view your rentals.</p>
        </div>
      </div>
    );
  } else {

    // Render the main content if loggedIn is not null
    return (
      <div className="mainContainer">
        <div className="bodyContainer">
          <div className="addBookingButton">
            <Link to="/RegisterListing" className="addButton">
              +
            </Link>
          </div>
          <div className="myListingsContainer">
            {myListings.map((listing) => (
              <RentalsCard key={listing._id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MyRentals;
