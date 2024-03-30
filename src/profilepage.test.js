// Import necessary modules
const request = require('supertest');
const app = require('../backend/server'); // Adjust this path based on the actual location

describe('Profile Page Endpoint', () => {
  it('should create a new profile and respond with a success message', async () => {
    // Example profile data to be sent in the request
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

    // Assertions to check if the response is as expected
    expect(response.statusCode).toBe(200); // Assuming 200 is the success status code
    expect(response.body).toEqual('Your profile has been saved successfully!');
  });
});
