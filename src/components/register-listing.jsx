import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for programmatic navigation
import './listings.css';

const RegisterListing = () => {
  const history = useHistory(); // Access the history object for navigation

  const [formData, setFormData] = useState({
    location: '',
    type: '',
    price: '',
    imageUrl: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., send it to a backend)
    // After successful submission, navigate back to the MyRentals page
    history.push('/my-rentals');
  };

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <form onSubmit={handleSubmit}>
          {/* Your form fields */}
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
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
          
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          
          {/* Add more fields as needed */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterListing;
