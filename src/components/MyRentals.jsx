import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './myrentals.css';
import RentalsCard from './RentalsCard';
import LoggedIn from '../contexts/loggedin';


const MyRentals = () => {
  const [myListings, setMyListings] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  console.log(loggedIn)

  console.log(loggedIn)
  useEffect(() => {
    if (loggedIn) { // Only simulate listings if the user is logged in
      const simulatedMyListings = [
        {
          _id: '1',
          imageUrl: 'URL_TO_IMAGE_1',
          location: 'My Downtown Spot',
          type: 'Covered',
          price: '$25/day',
          rating: 4.7,
        },
        {
          _id: '2',
          imageUrl: 'URL_TO_IMAGE_2',
          location: 'Home Garage',
          type: 'Garage',
          price: '$20/day',
          rating: 4.2,
        },
      ];

      setMyListings(simulatedMyListings);
    }
  }, [loggedIn]);

  if (loggedIn === null) {
    return <div className="mainContainer">PLEASE LOGIN</div>;
  
  } else {

    return (
      <div className="mainContainer">
        <div className="bodyContainer">
          <div className="addBookingButton">
          <Link to="/RegisterListing" className="addButton">
              +
            </Link>
          </div>
          <div className="myListingsContainer">
            {myListings.map((listing) => (
              <RentalsCard key={listing._id} listing={listing} /> 
            ))}
          </div>
        </div>
        {error && <p>Error Code: {error}</p>}
      </div>
    );
  }
};

export default MyRentals;
