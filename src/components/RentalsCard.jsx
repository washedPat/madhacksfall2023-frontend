// RentalsCard.js
import React from 'react';

function RentalsCard({ listing, onEdit }) {
  const handleEditClick = () => {
    // Call the onEdit callback with the current listing
    onEdit(listing);
  };

  return (
    <div className="listingCard">
      <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.location}</h3>
      <p className="listingInfo">Type: {listing.type}</p>
      <p className="listingInfo">Price: {listing.price}</p>
      <p className="listingInfo">Rating: {listing.rating}</p>
      {/* Call the handleEditClick function when the button is clicked */}
      <button className="listingButton" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
}

export default RentalsCard;
