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
import RegisterListing from './components/register-listing';

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
    if (credentials.username === '' || credentials.password === '') {
      alert('Empty values. Please input a valid username and password.');
      return false;
    }

    fetch("https://plot.fly.dev/api/login", {
      method: "POST",
      body: JSON.stringify({
        "username": credentials.username,
        "password": credentials.password,
      }),
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => {
      if (res.status === 200) {
        return res.json()
      }
      else if (res.status === 400) {
        return res.json()
      } else if (res.status === 500) {
        return res.json()
      }

    }).then(json => {
      
      if (json.message == "OK") {
        alert("You have been logged in! Please navigate to your desired section")
        setLoggedIn(json.data.username)
        return true
      }
      else {
        alert(json.message)
        return false
      }
    })
  }
  
  function handleRegister (credentials) {
    
    if (credentials.username === '' || credentials.password === '') {
      alert('Empty values. Please input a valid username and password.');
      return false;
    }

    // setLoggedIn(credentials.username);
    // return true

    fetch("https://plot.fly.dev/api/register", {
      method: "POST",
      body: JSON.stringify({
        "username": credentials.username,
        "password": credentials.password,
      }),
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => {
      if (res.status === 200) {
        return res.json()
      }
      else if (res.status === 400) {
        return res.json()
      } else if (res.status === 500) {
        return res.json()
      }

    }).then(json => {
      
      if (json.message == "OK") {
        console.log(json) // delete later
        alert("You have been registered and logged in! Please navigate to your desired section")
        setLoggedIn(json.data.username)
        return true
      }
      else {
        console.log(json) // delete later
        alert(json.message)
        return false
      }
    })
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
            <Route path="/RegisterListing" element={<RegisterListing />} />
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

