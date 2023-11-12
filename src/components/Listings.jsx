// Listings.jsx

import React, { useState, useEffect } from 'react';
import './listings.css'; // Import the regular CSS file
import Card from './Card';
const Listings = () => {
  const [listings, setListings] = useState([]);
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0); // State for pricing
  const [vehicleType, setVehicleType] = useState('');
  const [rating, setRating] = useState(0);
  const [electricVehicle, setElectricVehicle] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');

  console.log("curr location", currentLocation)
  console.log("distance", distance)
  console.log("price", price)
  console.log("vt", vehicleType)
  console.log("rating", rating)
  console.log("ev", electricVehicle)
  
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

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleElectricVehicleToggle = (e) => {
    setElectricVehicle(e.target.checked); // Toggle the state
  };
  const handleLocationChange = (e) => {
    setCurrentLocation(e.target.value);
  };

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="filterContainer">
          {/* Side box for filtering */}
          <label htmlFor="location">Current Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={currentLocation} // Set the input value to the state variable
            onChange={handleLocationChange} // Update the state variable when the input changes
          />

          {/* Distance slider */}
          <label htmlFor="distance">Distance: {distance} miles</label>
          <input
            type="range"
            id="distance"
            name="distance"
            min="0"
            max="100"
            step="10"
            value={distance}
            onChange={handleDistanceChange}
          />

          {/* Price slider */}
          <label htmlFor="price">Price: ${price}</label>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="100"
            step="1"
            value={price}
            onChange={handlePriceChange}
          />

          {/* Dropdown selector for vehicle type */}
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={vehicleType}
            onChange={handleVehicleTypeChange}
          >
            <option value="">Select Vehicle Type</option>
            <option value="Tight">Tight</option>
            <option value="Normal">Normal</option>
            <option value="Wide">Wide</option>
          </select>

          {/* Rating slider */}
          <label htmlFor="rating">Rating: {rating}</label>
          <input
            type="range"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step=".5"
            value={rating}
            onChange={handleRatingChange}
          />
          <label htmlFor="electricVehicleToggle">Electric Vehicle:</label>
          <div className="toggle-switch">
            <input
              id="electricVehicleToggle"
              type="checkbox"
              checked={electricVehicle}
              onChange={handleElectricVehicleToggle}
            />
            <label htmlFor="electricVehicleToggle" className="toggle-label"></label>
          </div>
        </div>

        <div className="listingContainer">
        {listings.map((listing) => (
          <Card key={listing._id} listing={listing} /> // Use the Card component
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Listings;

