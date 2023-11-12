// RentalsCard.js
import React from 'react';

function ProfileCard({ listing }) {
  const handleDelete = () => {
    console.log("DELETE:", listing)
  };

  return (
    <div className="listingCard">
      <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
      <h3 className="listingTitle">{listing.location}</h3>
      <p className="listingInfo">Type: {listing.type}</p>
      <p className="listingInfo">Price: {listing.price}</p>
      <p className="listingInfo">Rating: {listing.rating}</p>
      {/* Call the handleEditClick function when the button is clicked */}
      <button className="listingButton" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
}

export default ProfileCard;
