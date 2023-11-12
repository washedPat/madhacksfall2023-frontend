import React from 'react';

function RentalsCard({ listing, handleRemove}) {

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US");


  return (
    <div className="listingCard">
    <img src={listing.photoURL} alt="Parking Spot" className="listingImage" />
    <h3 className="listingTitle">{listing.title}</h3> {/* The JSON doesn't have a title field, so using a generic title */}
    <p className="listingInfo">Parking Size: {listing.parkingSize}</p>
    <p className="listingInfo">Price: ${listing.price}</p>
    <p className="listingInfo">Description: {listing.description}</p>
    <p className='listingInfo'>Date: {formatDate(listing.startDate)} - {formatDate(listing.endDate)}</p>
    <p className='listingInfo'>Address: {listing.address.street}, {listing.address.city}, {listing.address.state} {listing.address.zip} {listing.address.country}</p>
    <button className="listingButton" onClick={() => handleRemove(listing)}>Remove</button>
    
    </div>
  );





}

export default RentalsCard;
