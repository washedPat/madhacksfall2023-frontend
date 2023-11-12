// Listings.jsx

import React, { useState, useEffect } from 'react';
import './listings.css'; // Import the regular CSS file
import Card from './Card';
const Listings = () => {
  const [listings, setListings] = useState([]);
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0); // State for pricing
  const [parkingSize, SetParkingSize] = useState('');
  const [currentStreet, setCurrentStreet] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  // start and end date

  console.log("curr location", currentStreet, currentCity)
  console.log("distance", distance)
  console.log("price", price)
  console.log("vt", parkingSize)
  
  useEffect(() => {
    // Simulated data for testing without a backend
    const simulatedListings = [
      {
        _id: '1',
        title: "PARKING SPOT",
        imageUrl: 'https://th.bing.com/th/id/OIP.CxQ96svjDLG8m6OFPtAw9gHaJ4?pid=ImgDet&rs=1',
        parking_size: 'Tight',
        price: '$20/day',
        description: "a parking spot",
        start_date: "11/12/2023",
        end_date: "11/14/2023",
        street: "5567 173rd AVE SE",
        city: "Bellevue",
        state: "WA",
        country: "United States",
        zip: "98006"
      },

      {
        _id: '2',
        title: "Another PARKING SPOT",
        imageUrl: 'https://th.bing.com/th/id/OIP.CxQ96svjDLG8m6OFPtAw9gHaJ4?pid=ImgDet&rs=1',
        parking_size: 'Tight',
        price: '$50/day',
        description: "this parking spot is LIKE SO SOS SO SOSOSOSO NICe it is worth the price",
        start_date: "11/12/2023",
        end_date: "11/14/2023",
        street: "5567 173rd AVE SE",
        city: "Bellevue",
        state: "WA",
        country: "United States",
        zip: "98006"
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

