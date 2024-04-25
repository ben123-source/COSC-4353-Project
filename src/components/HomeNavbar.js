import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/');
  };

  const goToProfile = () => {
    const userId = localStorage.getItem('userId');
    if(userId) {
      navigate(`/profilepage/${userId}`);
    } else {
      console.error('No user ID found');
    }
  };

  const goToFuelQuoteHistory = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate(`/fuelQuotes/${userId}`);
    } else {
      console.error('No user ID found');
    }
  };

  return (
    <div className="bg-green-500 w-screen h-14 flex justify-between items-center px-3">
      <button onClick={goToProfile} className="text-white hover:underline">
        FueledUp
      </button>
      <ul className="flex gap-4">
        <button onClick={() => navigate("/fuelformpage")} className="text-white hover:underline">
          FuelQuoteCalculator
        </button>
        <button onClick={goToFuelQuoteHistory} className="text-white hover:underline">
          FuelQuoteHistory
        </button>
        <button onClick={goToProfile} className="text-white hover:underline">
          Profile
        </button>
        <button onClick={handleLogout} className="text-white hover:underline">
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
