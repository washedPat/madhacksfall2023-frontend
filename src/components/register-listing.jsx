import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './listings.css';

const RegisterListing = () => {
  // Access the navigate function for navigation
  const navigate = useNavigate();

  // State to store form data
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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle location changes
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

  // Handle address changes
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., send it to a backend)
    console.log('Form Data:', formData);
    // After successful submission, navigate back to the MyRentals page
    navigate('/MyRentals');
  };

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterListing;
