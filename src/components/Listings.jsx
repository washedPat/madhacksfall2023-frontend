// Listings.jsx

import React, { useState, useEffect } from 'react';
import './listings.css'; // Import the regular CSS file
import Card from './Card';
const Listings = () => {
  const [listings, setListings] = useState([]);
  const [distance, setDistance] = useState(100);
  const [price, setPrice] = useState(100); // State for pricing
  const [parkingSize, SetParkingSize] = useState('Normal');
  const [currentStreet, setCurrentStreet] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  // start and end date

  // console.log("curr location", currentStreet, currentCity)
  // console.log("distance", distance)
  // console.log("price", price)
  // console.log("vt", parkingSize)
  console.log(listings)
  function fetchData () {
    if (currentStreet !== '' && currentCity !== '') {
      fetch("https://plot.fly.dev/api/queryListings", {
       method: "POST",
        body: JSON.stringify({
          "maxPrice": price,
          "city": currentCity,
          "address": currentStreet,
          "distance": distance,
          "spotType": parkingSize,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => setListings(data));
    }
  };

  // Call fetchData when component mounts
  useEffect(() => {
    fetchData(); // This will run only once when the component mounts
  }, []); // Empty dependency array means it will run once on mount


  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleParkingSizeChange = (e) => {
    SetParkingSize(e.target.value);
  };
  const handleStreetChange = (e) => {
    setCurrentStreet(e.target.value);
  };
  const handleCityChange = (e) => {
    setCurrentCity(e.target.value);
  };


  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="filterContainer">
          {/* Side box for filtering */}
          <h2>Filters</h2>
          <label htmlFor="location">Street Address:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={currentStreet} // Set the input value to the state variable
            onChange={handleStreetChange} // Update the state variable when the input changes
          />
          <label htmlFor="location">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={currentCity} // Set the input value to the state variable
            onChange={handleCityChange} // Update the state variable when the input changes
          />
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
          <label htmlFor="parkingSize">Parking Spot Size:</label>
          <select
            id="parkingSize"
            name="parkingSize"
            value={parkingSize}
            onChange={handleParkingSizeChange}
          >
            <option value="">Select Vehicle Type</option>
            <option value="Tight">Tight</option>
            <option value="Normal">Normal</option>
            <option value="Wide">Wide</option>
          </select>
          <button onClick={fetchData}>Load Data</button>
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

