import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// components 
import HomePage from './components/Homepage';
import Listings from './components/Listings';
import MyRentals from './components/MyRentals';
import Profile from './components/Profile';
import Login from './components/login/Login'
// context 
import LoggedIn from './contexts/loggedin';


function App() {
 
  const isLoggedIn = JSON.parse(sessionStorage.getItem("logged-in"));
  const [loggedIn, setLoggedIn] = useState(isLoggedIn !== null ? isLoggedIn : null);
  
  // updates whenever loggedIn changes
  useEffect(() => {
    sessionStorage.setItem("logged-in", JSON.stringify(loggedIn))
  }, [loggedIn])


  function handleLogin (credentials) {
    // this would be replaced with actual login logic

    if (credentials.username === '' || credentials.password === '') {
      alert('Empty values. Please input a valid username and password.');
      return false;
    }
    
    setLoggedIn(true);
    return true
  }
  
  function handleRegister () {
    
    setLoggedIn(true);
  }

  function handleLogout () { 
    // this would be replaced with actual logout logic
    setLoggedIn(null);
  }

  return (
    <>
    <LoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <BrowserRouter>
        <div>
          {/* Define your routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Listing" element = {<Listings />} />
            <Route path="/MyRentals" element={<MyRentals />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />}/>
            {/* <Route path="/Logout" element= {<Logout onLogout={handleLogout} />}/>
            <Route path='/Register' element={<Regisert onRegister={handleRegister}/>}/> */}
          </Routes>
        </div>

        {/* Use the Link component for navigation */}
        <nav>
          <Link to="/Login">Login</Link> | <Link to="/">Home</Link> | <Link to="/Listing">Listings</Link>  | <Link to="/MyRentals">My Rentals</Link> | <Link to="/Profile">Profile</Link>
        </nav>
      </BrowserRouter>
    </LoggedIn.Provider>
    </>
  )
}
export default App

