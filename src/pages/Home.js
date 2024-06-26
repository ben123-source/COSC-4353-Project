import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Home = ({ setIsLoggedIn }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username: loginUsername,
        password: loginPassword
      });
      console.log('Response:', response.data);
      if (response.data.message === 'Login success') {
        localStorage.setItem('userId', response.data.userId); // Store user ID in local storage
        setIsLoggedIn(true); 
        console.log('Login successful');
        navigate('/profilepage/${userId}'); // Navigate to the profile route
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };
    

    return (
        <div>
            <h1 className="text-center text-3xl mt-8">Welcome</h1>
            <div className="flex justify-center mt-8">
                <div className="w-96 p-4 border border-black rounded-lg bg-white flex">
                    <form className="w-1/2 mr-2" onSubmit={handleLogin}>
                        <h2 className="text-lg font-semibold mb-4">Login</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={loginUsername}
                                onChange={(e) => setLoginUsername(e.target.value)} // Update username state on input change
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)} // Update password state on input change
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Login Now</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
//comment 
export default Home;