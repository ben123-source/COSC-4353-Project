import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Remove the user ID as well
    setIsLoggedIn(false);
    navigate('/'); // Navigate to home page after logout
  };

  // Function to navigate to profile page
  const goToProfile = () => {
    const userId = localStorage.getItem('userId'); // Get user ID from local storage
    if(userId) {
      navigate(`/profilepage/${userId}`); // Navigate to profile page with user ID
    } else {
      console.error('No user ID found');
      // Handle error, e.g., navigate to login page or show a message
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
      <button onClick={() => navigate("/")} className="text-white hover:underline">
        CompanyTitle
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
