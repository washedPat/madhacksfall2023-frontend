// Listings.jsx

import React, { useState, useEffect } from 'react';
import './listings.css'; // Import the regular CSS file

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated data for testing without a backend
    const simulatedListings = [
      {
        _id: '1',
        imageUrl: 'https://th.bing.com/th/id/OIP.CxQ96svjDLG8m6OFPtAw9gHaJ4?pid=ImgDet&rs=1',
        location: 'Downtown',
        type: 'Covered',
        price: '$20/day',
        rating: 4.5,
      },
      {
        _id: '2',
        imageUrl: 'https://th.bing.com/th/id/OIP._YpOTfWnQq1eiYm9txDL2gHaJ4?pid=ImgDet&w=177&h=235&c=7&dpr=2',
        location: 'Suburb',
        type: 'Open',
        price: '$15/day',
        rating: 3.8,
      },
      {
        _id: '3',
        imageUrl: 'URL_TO_IMAGE_3',
        location: 'City Center',
        type: 'Garage',
        price: '$25/day',
        rating: 4.2,
      },
      {
        _id: '4',
        imageUrl: 'URL_TO_IMAGE_4',
        location: 'Waterfront',
        type: 'Covered',
        price: '$30/day',
        rating: 4.9,
      },
      {
        _id: '5',
        imageUrl: 'URL_TO_IMAGE_5',
        location: 'Parkside',
        type: 'Open',
        price: '$18/day',
        rating: 3.5,
      },
      {
        _id: '6',
        imageUrl: 'URL_TO_IMAGE_6',
        location: 'Industrial Area',
        type: 'Garage',
        price: '$22/day',
        rating: 4.0,
      },
      // Add more simulated listings as needed
    ];

    setListings(simulatedListings); // Update the component state with simulated data
  }, []);

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="filterContainer">
          {/* Side box for filtering */}
          <div className="filterBox">
            <label htmlFor="location">Current Location:</label>
            <input type="text" id="location" name="location" />
            {/* Add more filter options as needed */}
            <p>Location Slider Bar</p>
          </div>
        </div>
        <div className="listingContainer">
          {/* Grid of listing cards */}
          {listings.map(listing => (
            <div key={listing._id} className="listingCard">
              <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
              <h3 className="listingTitle">{listing.location}</h3>
              <p className="listingInfo">Type: {listing.type}</p>
              <p className="listingInfo">Price: {listing.price}</p>
              <p className="listingInfo">Rating: {listing.rating}</p>
              <button className="listingButton">Book Now</button>
            </div>
          ))}
        </div>
      </div>
      {error && <p>Error Code: {error}</p>}
    </div>
  );
};

export default Listings;