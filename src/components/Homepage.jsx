// Import necessary React library
import React, { useContext }from 'react';
import LoggedIn from '../contexts/loggedin';
// Define the Home component
function HomePage() {
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  console.log(loggedIn)
  return (

    <div>
          <h1 className="text-3xl font-bold">Reserve your next parking plot</h1>
    </div>
   
  );
};

// Export the Home component for use in other parts of the application
export default HomePage;
