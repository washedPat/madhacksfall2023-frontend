// BookingNow.js

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingCard from './BookingCard'; // Assuming the file is in the same directory
import './BookingNow.css'; // Import your CSS file

function BookingNow() {
  const location = useLocation();
  const { listing } = location.state || {};
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingConfirmed) {
      navigate('/Profile');
    }
  }, [bookingConfirmed, navigate]);

  const handleConfirmBooking = (selectedListing) => {
    // Implement booking confirmation logic here
    // will send the listing ID and the username to the API
    console.log('Booking confirmed for:', selectedListing);
    setBookingConfirmed(true);
  };

  return (
    <div className="mainContainer">
        <BookingCard listing={listing} onConfirmBooking={handleConfirmBooking} />
    </div>
  );
}

export default BookingNow;
