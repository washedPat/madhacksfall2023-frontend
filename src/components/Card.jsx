import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ listing }) {
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate('/BookingNow', { state: { listing } });
  };
  return (
    <div className="listingCard">
      <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.title}</h3>
      <p className="listingInfo">Parking Size: {listing.parking_size}</p>
      <p className="listingInfo">Price: {listing.price}</p>
      <p className="listingInfo">Description: {listing.description}</p>
      <p className='listingInfo'>Date: {listing.start_date} - {listing.end_date}</p>
      <p className='listingInfo'>Address: {listing.street}, {listing.city}, {listing.state} {listing.zip} {listing.country}</p>
      <button className="listingButton" onClick={handleBooking}>Book Now</button>
    </div>
  );
}
export default Card;
