const request = require('supertest');
import app from '../backend/server.js'; 

describe('Login Endpoint', () => {
  it('should allow a user to log in with correct credentials and respond with a success message', async () => {
    // Example credentials to be sent in the request
    const loginCredentials = {
      username: "beaver",
      password: "123"
    };

    // Make a POST request to the login endpoint with the credentials
    const response = await request(app)
      .post('/')
      .send(loginCredentials);

    // Assertions to check if the response status code is 200 and body contains 'Login success'
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('Login success');
  });
});