import React, { useState } from 'react';
import Navbar from "../components/HomeNavbar.js";
import axios from 'axios';

const Profile = () => {
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSaveProfile =async e=>{
        e.preventDefault()
        try{
            const response = await axios.post("https://cosc-4353-project.onrender.com/profilepage", {
                fullName: fullName, 
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
                            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2">Address 1:</label>
                            <input type="text" id="address1" name="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Enter Address1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">Address 2:</label>
                            <input type="text" id="address2" name="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Enter Address2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                            <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)}  placeholder="Enter State" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <button type="button" onClick={handleSaveProfile} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Profile;
