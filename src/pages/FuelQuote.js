import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import the useParams hook

const FuelQuoteHistory = () => {
  const [quoteHistory, setQuoteHistory] = useState([]);
  const { userId } = useParams(); // Get the userId from the URL params

  useEffect(() => {
    const fetchQuoteHistory = async () => {
      if (!userId) {
        console.error('User ID is missing.');
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
  }, [userId]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Fuel Quote History</h2>
      {quoteHistory.length > 0 ? (
        <ul>
          {quoteHistory.map((quote, index) => (
            <li key={index} className="mb-2">
              <div>Date: {quote.delivery_date}</div>
              <div>Gallons Requested: {quote.gallons_requested}</div>
              <div>Address: {quote.delivery_address}</div>
              <div>State: {quote.delivery_state}</div>
              <div>City: {quote.delivery_city}</div>
              <div>Zip Code: {quote.delivery_zipcode}</div>
              <div>Suggested Price: {quote.suggested_price}</div>
              <div>Total Amount Due: {quote.total_amount_due}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quote history available.</p>
      )}
    </div>
  );
};

export default FuelQuoteHistory;
