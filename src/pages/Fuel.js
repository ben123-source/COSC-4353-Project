import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fuel = () => {
  const [gallonsRequested, setGallonsRequested] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryAddress1, setDeliveryAddress1] = useState('');
  const [deliveryZipcode, setDeliveryZipcode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [suggestedPrice, setSuggestedPrice] = useState('');
  const [totalAmountDue, setTotalAmountDue] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.error("User not logged in");
          return;
        }
        const response = await axios.get(`http://localhost:4000/profilepage/${userId}`);
        const profileData = response.data;
        setDeliveryState(profileData.state); // Preset the delivery state
        setDeliveryCity(profileData.city);
        setDeliveryAddress1(profileData.address1);
        setDeliveryZipcode(profileData.zipcode);
      } catch (err) {
        console.error('Error fetching profile data:', err);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const gallons = parseFloat(gallonsRequested);

    if (!userId) {
      alert("Please log in to submit a quote.");
      return;
    }

    if (isNaN(gallons) || gallons <= 0) {
      alert("Please enter a valid number of gallons requested.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/fuelformpage', {
        userId,
        gallonsRequested: gallons,
        deliveryState,
        deliveryAddress: deliveryAddress1,
        deliveryCity,
        deliveryZipcode,
        deliveryDate,
      });

      if (response.data.success) {
        setSuggestedPrice(response.data.suggestedPrice);
        setTotalAmountDue(response.data.totalAmountDue);
        alert("Fuel quote retrieved and submitted successfully!");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error('Error submitting the fuel quote:', error);
      alert("Failed to submit the fuel quote.");
    }
  };
  return (
    <div>
      <section className="flex justify-center items-center h-screen">
        {/* Fuel Quote Form */}
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Fuel Quote Form</h2>
          <form id="fuelQuoteForm" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <label htmlFor="gallonsRequested" className="block text-gray-700 text-sm font-bold mb-2">Gallons Requested:</label>
              <input type="number" id="gallonsRequested" name="gallonsRequested" value={gallonsRequested} onChange={(e) => setGallonsRequested(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
  <label htmlFor="deliveryState" className="block text-gray-700 text-sm font-bold mb-2">
    State:
  </label>
  <input
    type="text"
    id="deliveryState"
    name="deliveryState"
    value={deliveryState}
    readOnly
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  />
</div>
<div className="mb-4">
  <label htmlFor="deliveryCity" className="block text-gray-700 text-sm font-bold mb-2">
    City:
  </label>
  <input
    type="text"
    id="deliveryCity"
    name="deliveryCity"
    value={deliveryCity}
    readOnly
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  />
</div>

<div className="mb-4">
  <label htmlFor="deliveryAddress1" className="block text-gray-700 text-sm font-bold mb-2">
    Address Line 1:
  </label>
  <input
    type="text"
    id="deliveryAddress1"
    name="deliveryAddress1"
    value={deliveryAddress1}
    readOnly
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  />
</div>
<div className="mb-4">
        <label htmlFor="deliveryDate" className="block text-gray-700 text-sm font-bold mb-2">
          Delivery Date:
        </label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
{/* Delivery Zipcode (Non-editable) */}
<div className="mb-4">
  <label htmlFor="deliveryZipcode" className="block text-gray-700 text-sm font-bold mb-2">
    Zipcode:
  </label>
  <input
    type="text"
    id="deliveryZipcode"
    name="deliveryZipcode"
    value={deliveryZipcode}
    readOnly
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  />
</div>
          </form>
           {/* Suggested Price and Total Amount Due */}
           <div className="mb-4">
              <label htmlFor="suggestedPrice" className="block text-gray-700 text-sm font-bold mb-2">Suggested Price / gallon:</label>
              <input type="number" id="suggestedPrice" name="suggestedPrice" value={suggestedPrice} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="totalAmountDue" className="block text-gray-700 text-sm font-bold mb-2">Total Amount Due:</label>
              <input type="number" id="totalAmountDue" name="totalAmountDue" value={totalAmountDue} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <button type="submit" onClick={handleSubmit} disabled={!gallonsRequested || !deliveryDate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Quote</button>
        </div>
      </section>
    </div>
  );
};

export default Fuel;
