import React, { useState } from 'react';
import Navbar from "../components/HomeNavbar.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            if (response.data === 'Login success') {
                console.log('Login successful'); // Log the message
                navigate('/Fuel');
            
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl mt-8">Home page where users will log in</h1>
            <div className="flex justify-center mt-8">
                <div className="w-96 p-4 border border-black rounded-lg bg-white flex">
                    <form className="w-1/2 mr-2" onSubmit={handleLogin}>
                        <h2 className="text-lg font-semibold mb-4">Login</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Update username state on input change
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Login Now</button>
                    </form>
                    {/* Signup Form */}
                    {/* Signup Form */}
                    <form className="w-1/2 ml-2">
                        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Create your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Sign Up Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
//comment 
export default Home;
