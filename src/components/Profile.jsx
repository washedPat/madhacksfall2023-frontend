// import React from 'react';

// function Profile() {
//   return (

//     <div>
//           <h1 className="text-3xl font-bold">WILL HAVE THE BOOKED LISTINGS AND SAVED STUFF</h1>
//     </div>
   
//   );
// };

// export default Profile;// MyRentals.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import ProfileCard from './Profile-Card';
import LoggedIn from '../contexts/loggedin';

function Profile () {
  const [myListings, setMyListings] = useState([]);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data for demonstration purposes
    const simulatedMyListings = [
      {
        _id: '1',
        parkingSize: 'Compact',
        price: 25,
        description: 'My Downtown Spot',
        // other fields...
      },
      {
        _id: '2',
        parkingSize: 'Standard',
        price: 20,
        description: 'Home Garage',
        // other fields...
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
        price: '30',
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
    ];

    setMyListings(simulatedMyListings);
  }, []);

  const handleEdit = (listing) => {
    setSelectedListing(listing);
    navigate('/RegisterListing');
  };

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <div className="myListingsContainer">
          {myListings.map((listing) => (
            <ProfileCard key={listing._id} listing={listing} onEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
