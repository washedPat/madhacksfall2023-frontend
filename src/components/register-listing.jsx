import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './listings.css';
import './registerListing.css'

const RegisterListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parkingSize: '',
    price: 0,
    title: '',
    description: '',
    photoURL: '',
    startDate: '', // Updated format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
    endDate: '', // Updated format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: 0,
    },
  });

  const formatDatesForPost = (data) => {
    return {
      ...data,
      startDate: data.startDate ? new Date(data.startDate).toISOString() : '',
      endDate: data.endDate ? new Date(data.endDate).toISOString() : '',
    };
  };


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let processedValue = value;
  
    if (type === 'number') {
      processedValue = parseFloat(value);
    }
  
    // Update the formData state directly with the value for non-date fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  };
  
  
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: name === 'zip' ? parseFloat(value) : value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDataForPost = formatDatesForPost(formData);
    console.log(formattedDataForPost)
    const apiUrl = 'https://plot.fly.dev/api/createListing';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(formattedDataForPost),
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
          {/* Form fields with values from formData */}
          <label htmlFor="parkingSize">Parking Size:</label>
          <select
            id="parkingSize"
            name="parkingSize"
            value={formData.parkingSize}
            onChange={handleChange}
          >
            <option value="">Select Parking Size</option>
            <option value="Tight">Tight</option>
            <option value="Normal">Normal</option>
            <option value="Wide">Wide</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={Number(formData.price)}
            onChange={handleChange}
          />

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
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
            onChange={handleChange}
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />

          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.address.street}
            onChange={handleLocationChange}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.address.city}
            onChange={handleLocationChange}
          />

          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.address.state}
            onChange={handleLocationChange}
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.address.country}
            onChange={handleLocationChange}
          />

          <label htmlFor="zip">Zip:</label>
          <input
            type="number"
            id="zip"
            name="zip"
            value={Number(formData.address.zip)}
            onChange={handleLocationChange}
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
