// Import necessary modules
const request = require('supertest');
const app = require('../backend/server'); // Adjust this path based on the actual location

describe('Profile Page Creation', () => {
  it('should successfully create a new profile and respond with a 200 status code', async () => {
    // Example complete profile data to be sent in the request
    const profileData = {
      fullName: "John Doe",
      address1: "1234 Main St",
      address2: "Apt 101",
      city: "Anytown",
      state: "Anystate",
      zipcode: "12345"
    };

    // Make a POST request to the /profilepage endpoint with the profile data
    const response = await request(app)
      .post('/profilepage')
      .send(profileData);

    // Assertions to check if the response status code is 200
    expect(response.statusCode).toBe(200);
  });
});
