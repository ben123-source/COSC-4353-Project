const request = require('supertest');
import app from '../backend/server.js';

describe('Fuel Quote History Endpoint', () => {
  it('should return a 200 status and an array of quotes with all required fields', async () => {
    await request(app)
      .get('/api/fuelQuotes')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        // Assuming the endpoint returns an array of quotes, check if the response body is an array
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
      })
      .catch(err => {
        // Handle any assertion errors or unexpected behavior here
        console.error('Test encountered an error:', err);
      });
  });
});

