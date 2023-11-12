import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './listings.css';

const RegisterListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parkingSize: '',
    price: '',
    description: '',
    photoURL: '',
    startDate: '',
    endDate: '',
    location: {
      lat: '',
      long: '',
    },
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
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
            type="text"
            id="price"
            name="price"
            value={formData.price}
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
            type="text"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />

          <label htmlFor="lat">Location Latitude:</label>
          <input
            type="text"
            id="lat"
            name="lat"
            value={formData.location.lat}
            onChange={handleLocationChange}
          />

          <label htmlFor="long">Location Longitude:</label>
          <input
            type="text"
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
            type="text"
            id="zip"
            name="zip"
            value={formData.address.zip}
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
