import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Signup = () =>{
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://cosc-4353-project.onrender.com/signup`, { username: signupUsername, password: signupPassword });
            if (response.data === 'Signup success') {
                console.log('Signup successful');
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return(
        <div>
            <form className="w-1/2 ml-2" onSubmit={handleSignup}>
                        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={signupUsername}
                                onChange={(e) => setSignupUsername(e.target.value)} // Update signup username state on input change
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Create your password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)} // Update signup password state on input change
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on input change
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">Sign Up Now</button>
                    </form>
                    </div>
    );
}

export default Signup;
