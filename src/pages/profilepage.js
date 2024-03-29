import React, { useState } from 'react';
import Navbar from "../components/HomeNavbar.js";
import axios from 'axios';

const Profile = () => {
    const [full_name, address1, address2, city, state, zipcode] = useState('');

    const handleSaveProfile =async e=>{
        e.preventDefault()
        try{
            const response = await axios.put("https://cosc-4353-project.onrender.com/profilepage", {
                full_name: full_name, 
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zipcode: zipcode
            });
            console.log(response);
        }catch(err){
            console.log('---- ITS AN ERROR!!!')
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar />
            <section className="flex justify-center items-center h-screen">
                {/* Profile Information Form */}
                <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                    <form id="profileForm">
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2">Address 1:</label>
                            <input type="text" id="address1" name="address1" placeholder="Enter Address1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">Address 2:</label>
                            <input type="text" id="address2" name="address2" placeholder="Enter Address2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" id="city" name="city" placeholder="Enter City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                            <input type="text" id="state" name="state" placeholder="Enter State" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="Enter Zipcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <button type="button" onClick={handleSaveProfile} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Profile;
