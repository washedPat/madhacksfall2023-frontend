import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import ProfileCard from './Profile-Card';
import LoggedIn from '../contexts/LoggedIn';

function Profile () {
  const [myListings, setMyListings] = useState([]);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();
  
  function handleUnbook(listing){
    console.log(listing)
    fetch(`https://plot.fly.dev/api/removeBooking`, {
      method: "POST",
      body: JSON.stringify({
        "bookingID": listing.id,
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
        alert("Booking Removed")

      }
      else {
        alert(json.message)
      }
    })
  };

  useEffect(() => {
    if (loggedIn) {
      fetch(`https://plot.fly.dev/api/getUserBookings?username=${loggedIn}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then((data) => setMyListings(data));
    }
  }, [myListings]); 

  if (!loggedIn) {
    return (
      <div className="mainContainer">
        <p>Please login to view your booked listings.</p>
      </div>
    );
  }

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="myListingsContainer">
          {myListings.map((listing) => (
            <ProfileCard key={listing._id} listing={listing} handleUnbook={handleUnbook} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
