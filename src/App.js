import React from "react";
import Home from "./pages/Home.js";
import Fuel from "./pages/Fuel.js";
import Signup from "./pages/Signup.js";
import FuelQuoteHistory from "./pages/FuelQuote.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//test commit
const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fuelformpage" element={<Fuel />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/fuelQuotes" element={<FuelQuoteHistory />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;