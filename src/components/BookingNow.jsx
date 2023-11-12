import React, {useEffect, useState}from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function BookingNow (){
  const location = useLocation();
  const { listing } = location.state || {}; 
  const [bookingConfirmed, setBookingConfirmed] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingConfirmed) {
      navigate('/');
    }
  }, [bookingConfirmed, navigate]); 
  const handleConfirmBooking = () => {
    // Implement booking confirmation logic here
    // will send the listing ID and the username to the api

    console.log('Booking confirmed for:', listing);
    setBookingConfirmed(true);
  };

  return (
    <div>
      <h1>Prepare Booking</h1>
      <p>Title: {listing.title}</p>
      <p>Description: {listing.description}</p>
      <p>Price: {listing.price}</p>
      <p>Size: {listing.parking_size}</p>
      <p>Date: {listing.start_date} - {listing.end_date}</p>
      <p>Address: {listing.street} {listing.city}, {listing.state}, {listing.zip} {listing.country}</p>
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingNow;
