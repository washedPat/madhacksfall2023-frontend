import React, { useContext} from 'react';
import LoggedIn from '../contexts/loggedin';

function MyRentals() {
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  console.log(loggedIn)
  
  return (
    
    <div>
          <h1 className="text-3xl font-bold">MY RENTALS</h1>
    </div>
   
  );
};

export default MyRentals;
