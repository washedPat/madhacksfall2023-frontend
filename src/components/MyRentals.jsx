
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyRentals.css';
import RentalsCard from './RentalsCard';
import LoggedIn from '../contexts/LoggedIn';

const MyRentals = () => {
  const [myListings, setMyListings] = useState([]);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();


  function handleRemove(listing){
    console.log(listing)
    fetch(`https://plot.fly.dev/api/removeListing`, {
      method: "POST",
      body: JSON.stringify({
        "listingID": listing.id,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      }
      else if (res.status === 400) {
        return res.json()
      } else if (res.status === 500) {
        return res.json()
      }
    }).then(json => {
      if (json.message == "OK") {
        alert("Booking Deleted")
      }
      else {
        alert(json.message)
      }
    })
  };

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
              <RentalsCard key={listing._id} listing={listing} handleRemove={handleRemove} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MyRentals;
