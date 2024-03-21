import React from "react";
import Home from "./pages/Home";
import Fuel from "./pages/Fuel";
import Test from "./tests";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fuelformpage" element={<Fuel />} />
                <Route path="/test" element={<Test />} /> {/* Corrected rendering of Test component */}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
