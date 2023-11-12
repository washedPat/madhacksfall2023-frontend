import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './listings.css';

const MyRentals = () => {
  const [myListings, setMyListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const simulatedMyListings = [
      {
        _id: '1',
        imageUrl: 'URL_TO_IMAGE_1',
        location: 'My Downtown Spot',
        type: 'Covered',
        price: '$25/day',
        rating: 4.7,
      },
      {
        _id: '2',
        imageUrl: 'URL_TO_IMAGE_2',
        location: 'Home Garage',
        type: 'Garage',
        price: '$20/day',
        rating: 4.2,
      },
      // Add more simulated listings as needed
    ];

    setMyListings(simulatedMyListings);
  }, []);

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="addBookingButton">
          {/* Use the Link component from react-router-dom for navigation */}
          <Link to="/RegisterListing">
            <a className="addButton">+</a>
          </Link>
        </div>
        <div className="myListingsContainer">
          {/* Grid of My Listings cards */}
          {myListings.map((listing) => (
            <div key={listing._id} className="listingCard">
              <img src={listing.imageUrl} alt="Parking Spot" className="listingImage" />
              <h3 className="listingTitle">{listing.location}</h3>
              <p className="listingInfo">Type: {listing.type}</p>
              <p className="listingInfo">Price: {listing.price}</p>
              <p className="listingInfo">Rating: {listing.rating}</p>
              <button className="editButton">Edit</button>
            </div>
          ))}
        </div>
      </div>
      {error && <p>Error Code: {error}</p>}
    </div>
  );
};

export default MyRentals;
