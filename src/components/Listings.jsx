// Listings.jsx

import React, { useState, useEffect } from 'react';
import './Listings.css'; // Import the regular CSS file
import Card from './Card';
const Listings = () => {
  const [listings, setListings] = useState([]);
  const [distance, setDistance] = useState(100);
  const [price, setPrice] = useState(100); // State for pricing
  const [parkingSize, SetParkingSize] = useState('Normal');
  const [currentStreet, setCurrentStreet] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  function fetchData () {
    
    const startDateISO = startDate ? new Date(startDate).toISOString() : '';
    const endDateISO = endDate ? new Date(endDate).toISOString() : '';
    
    if (currentStreet !== '' && currentCity !== '') {
      fetch("https://plot.fly.dev/api/queryListings", {
       method: "POST",
        body: JSON.stringify({
          "maxPrice": price,
          "city": currentCity,
          "address": currentStreet,
          "distance": distance,
          "spotType": parkingSize,
          "startDate": startDateISO,
          "endDate": endDateISO,

        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => setListings(data));
    }
  };
  
  useEffect(() => {
    fetchData(); 
  }, []); 


  const handleDistanceChange = (e) => {
    // setDistance(e.target.value);
    setDistance(parseInt(e.target.value, 10));
  };
  const handlePriceChange = (e) => {
    // setPrice(e.target.value);
    setPrice(parseInt(e.target.value, 10));
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
  
  function handleEndDateChange (e) {
    setEndDate(e.target.value)
  }

  function handleStartDateChange (e) {
    setStartDate(e.target.value)
  }

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="filterContainer">
          {/* Side box for filtering */}
          <h2>Filters</h2>
          <h5>All filters required for plots to show</h5>
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
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
          <button onClick={fetchData}>Load Listings</button>
        </div>

        <div className="listingContainer">
        {listings.length === 0 ? (
          <div>No listings</div>
        ) : (
          listings.map((listing) => (
            <Card key={listing._id} listing={listing} />
          ))
        )}
      </div>
      </div>
    </div>
  );
};

export default Listings;

