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
            const response = await axios.post(`https://cosc-4353-project.onrender.com/`, { username: loginUsername, password: loginPassword });
            console.log('Response:', response.data); // Log the response data
            if (response.data === 'Login success') {
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true); // Update login state
                console.log('Login successful');
                navigate('/fuelformpage');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    return (
        <div>
            
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