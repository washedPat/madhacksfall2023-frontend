import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// components 
import HomePage from './components/Homepage';
import Listings from './components/Listings';
import MyRentals from './components/MyRentals';
import Profile from './components/Profile';
import Login from './components/login/Login'
import Register from './components/login/Register'
import Logout from './components/login/Logout';
import Header from './components/Header';
// context 
import LoggedIn from './contexts/loggedin';


function App() {
 
  const isLoggedIn = JSON.parse(sessionStorage.getItem("logged-in"));
  const [loggedIn, setLoggedIn] = useState(isLoggedIn !== null ? isLoggedIn : null);
  
  // set sessionstorage whenever loggedIn changes
  useEffect(() => {
    sessionStorage.setItem("logged-in", JSON.stringify(loggedIn))
  }, [loggedIn])


  function handleLogin (credentials) {
    console.log("in handleLogin")
    if (credentials.username === '' || credentials.password === '') {
      alert('Empty values. Please input a valid username and password.');
      return false;
    }

    setLoggedIn(credentials.username);
    return true
  }
  
  function handleRegister (credentials) {
    
    if (credentials.username === '' || credentials.password === '') {
      alert('Empty values. Please input a valid username and password.');
      return false;
    }

    setLoggedIn(credentials.username);
    return true
  }

  function handleLogout () { 
    setLoggedIn(null);
  }

  return (
    <>
    <LoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <BrowserRouter>
        <Header loggedIn={loggedIn} />
        <div>
          {/* Define your routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Listings" element = {<Listings />} />
            <Route path="/MyRentals" element={<MyRentals />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />}/>
            <Route path="/Logout" element= {<Logout onLogout={handleLogout} />}/>
            <Route path='/Register' element={<Register onRegister={handleRegister}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </LoggedIn.Provider>
    </>
  )
}
export default App

