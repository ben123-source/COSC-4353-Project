const request = require('supertest');
import app from '../backend/server.js'; 

describe('Signup Endpoint', () => {
  it('should allow a new user to sign up and respond with a success message', async () => {
    // Example new user credentials
    const newUser = {
      username: "newUser", // Use a unique username to avoid conflicts in your database
      password: "newPassword"
    };

    // Make a POST request to the signup endpoint with the new user's credentials
    const response = await request(app)
      .post('/signup') // Ensure this matches your actual signup route
      .send(newUser);

    // Assertions to check if the response status code is 200 and body contains 'Signup success'
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('Signup success');
  });
});
