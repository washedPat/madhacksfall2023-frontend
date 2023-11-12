// BookingNow.js

import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingCard from './BookingCard'; // Assuming the file is in the same directory
import './BookingNow.css'; // Import your CSS file
import LoggedIn from '../contexts/loggedin';

function BookingNow() {
  const location = useLocation();
  const { listing } = location.state || {};
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {

    if (bookingConfirmed) {
      navigate('/Profile');
    }
  }, [bookingConfirmed, navigate]);

  function handleConfirmBooking (listing){
    
    fetch("https://plot.fly.dev/api/bookListing", {
       method: "POST",
        body: JSON.stringify({
          "listingID": listing.id,
          "username": loggedIn,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => setListings(data));
    
    setBookingConfirmed(true);
  };

  return (
    <div className="mainContainer">
        <BookingCard listing={listing} onConfirmBooking={handleConfirmBooking} />
    </div>
  );
}

export default BookingNow;
