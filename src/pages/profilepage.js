import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    const states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
      ];

    // Fetch the profile data when the component mounts
    useEffect(() => {
        const fetchProfile = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://localhost:4000/profilepage/${userId}`);
                const data = response.data;
                setFullName(data.fullName || '');
                setAddress1(data.address1 || '');
                setAddress2(data.address2 || '');
                setCity(data.city || '');
                setState(data.state || '');
                setZipcode(data.zipcode || '');
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
            setLoading(false);
        };

        fetchProfile();
    }, []);

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error('User is not logged in.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:4000/profilepage', {
                _id: userId,
                fullName,
                address1,
                address2,
                city,
                state,
                zipcode
            });
            console.log('Profile saved:', response.data);
        } catch (error) {
            console.error('Error saving profile:', error.response?.data?.error || error.message);
        }
    };

    

    return (
        <div>
            <section className="flex justify-center items-center h-screen">
                <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form id="profileForm">
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2">Address 1:</label>
                            <input type="text" id="address1" name="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Enter Address 1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">Address 2:</label>
                            <input type="text" id="address2" name="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Enter Address 2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                            <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Select a State</option>
                                {states.map((st) => (
                                    <option key={st} value={st}>{st}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button type="button" onClick={handleSaveProfile} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Profile;
