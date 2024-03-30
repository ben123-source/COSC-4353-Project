import React from "react";
import Home from "./pages/Home.js";
import Fuel from "./pages/Fuel.js";
import Signup from "./pages/Signup.js";
import FuelQuoteHistory from "./pages/FuelQuote.js";
import Profile from "./pages/profilepage.js";
import Navbar from "../components/HomeNavbar";
import NavbarLO from "../components/loggedoutNavbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//test commit
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token
    setIsLoggedIn(false); // Update login state
  };
  return (
    <BrowserRouter>
          {isLoggedIn ? <Navbar handleLogout={handleLogout} /> : <NavbarLO />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fuelformpage" element={<Fuel />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/fuelQuotes" element={<FuelQuoteHistory />} />
                <Route path="/profilepage" element={<Profile />} />

            </Routes>
        </BrowserRouter>
  );
}

export default App;