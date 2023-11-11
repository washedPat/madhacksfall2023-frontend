import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// components 
import HomePage from './components/Homepage';
import Listings from './components/Listings';
import MyRentals from './components/MyRentals';
import Profile from './components/Profile';
function App() {

  return (
    <>
    <BrowserRouter>
      <div>
        {/* Use the Link component for navigation */}
        

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Listing" element = {<Listings />} />
          <Route path="/MyRentals" element={<MyRentals />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>

      <nav>
          <Link to="/">Home</Link> | <Link to="/Listing">Listings</Link>  | <Link to="/MyRentals">My Rentals</Link> | <Link to="/Profile">Profile</Link>
        </nav>
    </BrowserRouter>

    </>
  )
}
export default App

