const request = require('supertest');
import app from '../backend/server.js';

describe('Fuel Quote History Endpoint', () => {
  // Test for successful retrieval of fuel quotes
  it('should return a 200 status and an array of quotes with all required fields', async () => {
    await request(app)
      .get('/api/fuelQuotes')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy();

        if (response.body.length > 0) {
          const firstQuote = response.body[0];
          expect(firstQuote).toHaveProperty('date');
          expect(firstQuote).toHaveProperty('deliveryAddress');
          expect(firstQuote).toHaveProperty('suggestedPrice');
          expect(firstQuote).toHaveProperty('totalAmountDue');
          expect(firstQuote).toHaveProperty('gallonsRequested');
          // Add more property checks as needed
        }
      });
  });

  // Test for empty quote history
  it('should return a 200 status and an empty array if the user has no quote history', async () => {
    await request(app)
      .get('/api/fuelQuotes')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBe(0); // Expecting an empty array
      });
  });

  // Test for unauthorized access (assuming authentication is required)
  it('should return a 401 status if the user is not authenticated', async () => {
    await request(app)
      .get('/api/fuelQuotes') // Endpoint might require authentication
      .expect(401); // Assuming 401 for unauthorized access
  });

  // Test for data format integrity
  it('should ensure that all quotes have the correct data types for their fields', async () => {
    await request(app)
      .get('/api/fuelQuotes')
      .expect(200)
      .then(response => {
        if (response.body.length > 0) {
          const firstQuote = response.body[0];
          expect(typeof firstQuote.date).toBe('string'); // Example check
          expect(typeof firstQuote.deliveryAddress).toBe('string');
          expect(typeof firstQuote.suggestedPrice).toBe('number');
          expect(typeof firstQuote.totalAmountDue).toBe('number');
          expect(typeof firstQuote.gallonsRequested).toBe('number');
        }
      });
  });


  
});
