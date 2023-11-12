// RentalsCard.js
import React from 'react';

function RentalsCard({ listing }) {
  function handleRemove () {
    // Call the onEdit callback with the current listing
    // remove Listing from the database
    // no editing allowed
    console.log("REMOVE:", listing)
  };

  return (
    <div className="listingCard">ß
      <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.location}</h3>
      <p className="listingInfo">Type: {listing.type}</p>
      <p className="listingInfo">Price: {listing.price}</p>
      <p className="listingInfo">Rating: {listing.rating}</p>
      {/* Call the handleEditClick function when the button is clicked */}
      <button className="listingButton" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default RentalsCard;
