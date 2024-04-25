import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuelQuoteHistory = () => {
  const [quoteHistory, setQuoteHistory] = useState([]);

  useEffect(() => {
    const fetchQuoteHistory = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User is not logged in.');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:4000/fuelQuotes/${userId}`);
        setQuoteHistory(response.data);
      } catch (err) {
        console.error('Error fetching quote history:', err);
      }
    };

    fetchQuoteHistory();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Fuel Quote History</h2>
      {quoteHistory.length > 0 ? (
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Gallons Requested</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">State</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Zip Code</th>
              <th className="px-4 py-2 text-left">Suggested Price</th>
              <th className="px-4 py-2 text-left">Total Amount Due</th>
            </tr>
          </thead>
          <tbody>
            {quoteHistory.map((quote, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-2">{quote.delivery_date}</td>
                <td className="px-4 py-2">{quote.gallons_requested}</td>
                <td className="px-4 py-2">{quote.delivery_address}</td>
                <td className="px-4 py-2">{quote.delivery_state}</td>
                <td className="px-4 py-2">{quote.delivery_city}</td>
                <td className="px-4 py-2">{quote.delivery_zipcode}</td>
                <td className="px-4 py-2">{quote.suggested_price}</td>
                <td className="px-4 py-2">{quote.total_amount_due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No quote history available.</p>
      )}
    </div>
  );
};

export default FuelQuoteHistory;