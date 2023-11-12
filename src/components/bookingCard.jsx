// BookingCard.js

import React from 'react';

function BookingCard({ listing, onConfirmBooking }) {
  const handleConfirmBookingClick = () => {
    onConfirmBooking(listing);
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US");

  return (
    <div className="bookingCard">
      <div className="bookingDetails">
          <img src={listing.photoURL} alt="Parking Spot" className="listingImage" />
          <div className="listingInfoContainer">
            <h3 className="listingTitle">{listing.title}</h3>
            <p className="listingInfo">Parking Size: {listing.parkingSize}</p>
            <p className="listingInfo">Price: ${listing.price}</p>
            <p className="listingInfo">Description: {listing.description}</p>
            <p className='listingInfo'>Date: {formatDate(listing.startDate)} - {formatDate(listing.endDate)}</p>
            <p className='listingInfo'>Address: {listing.address.street}, {listing.address.city}, {listing.address.state} {listing.address.zip} {listing.address.country}</p>
        </div>
      </div>
      <div className="confirmationSection">
        <button className="bookingButton" onClick={() => onConfirmBooking(listing)}>
          Reserve Plot
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
