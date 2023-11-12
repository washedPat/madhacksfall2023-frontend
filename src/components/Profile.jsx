import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import ProfileCard from './Profile-Card';
import LoggedIn from '../contexts/loggedin';

function Profile () {
  const [myListings, setMyListings] = useState([]);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();
  console.log(loggedIn)
  
  // useEffect(() => {
    
  //   fetch(`https://plot.fly.dev//api/getUserBookings?username=${loggedIn}`, {
  //      method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setMyListings(data));
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    // Ensure loggedIn is not null or undefined
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
  }, [loggedIn]); // Add loggedIn as a dependency to the useEffect hook

  console.log(myListings)
  

  if (!loggedIn) {
    return (
      <div className="mainContainer">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="myListingsContainer">
          {myListings.map((listing) => (
            <ProfileCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
