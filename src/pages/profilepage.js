import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!fullName) {
            formIsValid = false;
            errors["fullName"] = "Full name cannot be empty";
        }

        if (!address1) {
            formIsValid = false;
            errors["address1"] = "Address 1 cannot be empty";
        }

        if (!city) {
            formIsValid = false;
            errors["city"] = "City cannot be empty";
        }

        if (!state) {
            formIsValid = false;
            errors["state"] = "Please select a state";
        }

        if (!zipcode || !/^\d{5}(-\d{4})?$/.test(zipcode)) {
            formIsValid = false;
            errors["zipcode"] = "Please enter a valid ZIP code (5 digits or ZIP+4 format)";
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log('Validation failed:', errors);
            return;
        }

        try {
            const response = await axios.post("https://cosc-4353-project.onrender.com/profilepage", {
                fullName, 
                address1,
                address2,
                city,
                state,
                zipcode
            });
            console.log(response);
        } catch (err) {
            console.log('Error:', err);
        }
    }

    return (
        <div>
            <section className="flex justify-center items-center h-screen">
                {/* Profile Information Form */}
                <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                    <form id="profileForm">
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2">Address 1:</label>
                            <input type="text" id="address1" name="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Enter Address1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.address1 && <p className="text-red-500 text-xs italic">{errors.address1}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">Address 2:</label>
                            <input type="text" id="address2" name="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Enter Address2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.address2 && <p className="text-red-500 text-xs italic">{errors.address2}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                            <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)}  placeholder="Enter State" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            {errors.zipcode && <p className="text-red-500 text-xs italic">{errors.zipcode}</p>}
                        </div>
                        <button type="button" onClick={handleSaveProfile} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Profile;
