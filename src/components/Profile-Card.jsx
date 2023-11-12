// RentalsCard.js
import React from 'react';

function ProfileCard({ listing }) {
  const handleUnbook = () => {
    console.log("UNBOOK:", listing)
  };

  return (
    <div className="listingCard">
      <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.location}</h3>
      <p className="listingInfo">Type: {listing.type}</p>
      <p className="listingInfo">Price: {listing.price}</p>
      <p className="listingInfo">Rating: {listing.rating}</p>
      <button className="listingButton" onClick={handleUnbook}>
        UnBook
      </button>
    </div>
  );
}

export default ProfileCard;
