import React, {useEffect, useState}from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function BookingNow (){
  const location = useLocation();
  const { listing } = location.state || {}; 
  const [bookingConfirmed, setBookingConfirmed] = useState(false); 
  const navigate = useNavigate();
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US");

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
      <img src={listing.photoURL} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.title}</h3> {/* The JSON doesn't have a title field, so using a generic title */}
      <p className="listingInfo">Parking Size: {listing.parkingSize}</p>
      <p className="listingInfo">Price: ${listing.price}</p>
      <p className="listingInfo">Description: {listing.description}</p>
      <p className='listingInfo'>Date: {formatDate(listing.startDate)} - {formatDate(listing.endDate)}</p>
      <p className='listingInfo'>Address: {listing.address.street}, {listing.address.city}, {listing.address.state} {listing.address.zip} {listing.address.country}</p>
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingNow;
