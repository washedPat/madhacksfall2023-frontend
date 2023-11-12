import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './listings.css';

const RegisterListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parkingSize: '',
    price: 0,
    description: '',
    photoURL: '',
    startDate:  new Date().toISOString(), // new Date().toISOString()
    endDate:  new Date().toISOString(), // new Date().toISOString()
    location: {
      lat: 0,
      long: 0,
    },
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input type is 'number', convert the value to a number
    const processedValue = type === 'number' ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: parseFloat(value), // Convert to a number
      },
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: name === 'zip' ? parseFloat(value) : value, // Convert zip to a number
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://plot.fly.dev/api/createListing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        navigate('/MyRentals');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, show a message, etc.
      });
  };

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <form onSubmit={handleSubmit} className="formContainer">
          {/* Your form fields */}
          <label htmlFor="parkingSize">Parking Size:</label>
          <input
            type="text"
            id="parkingSize"
            name="parkingSize"
            value={formData.parkingSize}
            onChange={handleChange}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={Number(formData.price)}
            onChange={handleChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="photoURL">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
          />

          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={(e) => {
                const isoDateString = new Date(e.target.value).toISOString();
                handleChange({ target: { name: 'startDate', value: isoDateString } });
            }}
          />

        <label htmlFor="endDate">End Date:</label>
        <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={(e) => {
                const isoDateString = new Date(e.target.value).toISOString();
                handleChange({ target: { name: 'endDate', value: isoDateString } });
            }}
        />


          <label htmlFor="lat">Location Latitude:</label>
          <input
            type="number"
            id="lat"
            name="lat"
            value={formData.location.lat}
            onChange={handleLocationChange}
          />

          <label htmlFor="long">Location Longitude:</label>
          <input
            type="number"
            id="long"
            name="long"
            value={formData.location.long}
            onChange={handleLocationChange}
          />

          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
          />

          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.address.country}
            onChange={handleAddressChange}
          />

          <label htmlFor="zip">Zip:</label>
          <input
            type="number"
            id="zip"
            name="zip"
            value={Number(formData.address.zip)}
            onChange={handleAddressChange}
          />

          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterListing;
