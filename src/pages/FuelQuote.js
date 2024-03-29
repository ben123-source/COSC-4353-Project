
import Navbar from "../components/HomeNavbar.js";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FuelQuoteHistory = () => {
  const [quoteHistory, setQuoteHistory] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/fuelQuotes')
      .then(response => {
        setQuoteHistory(response.data);
      })
      .catch(error => console.log('Error fetching fuel quote history:', error));
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Fuel Quote History</h2>
      <div className="form-group">
        {quoteHistory.map((quote, index) => (
          <div key={index}>
            <p className="text-sm text-gray-700">
              Date: {quote.date}, Address: {quote.deliveryAddress}, Suggested Price: ${quote.suggestedPrice}, Total Amount Due: ${quote.totalAmountDue}, Gallons Requested: {quote.gallonsRequested}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelQuoteHistory;

