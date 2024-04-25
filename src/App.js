import React, { useState } from "react";
import Home from "./pages/Home.js";
import Fuel from "./pages/Fuel.js";
import Signup from "./pages/Signup.js";
import FuelQuoteHistory from "./pages/FuelQuote.js";
import Profile from "./pages/profilepage.js";
import Navbar from "./components/HomeNavbar.js";
import NavbarLO from "./components/loggedoutNavbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token
    setIsLoggedIn(false); // Update login state
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? <Navbar handleLogout={handleLogout} setIsLoggedIn={setIsLoggedIn} /> : <NavbarLO />}
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/fuelformpage" element={<Fuel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fuelQuotes/:userId" element={<FuelQuoteHistory />} />
        <Route path="/profilepage/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;