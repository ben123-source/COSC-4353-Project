const request = require('supertest');
const app = require('../backend/server'); // Make sure this path correctly points to your Express app

describe('Login Endpoint', () => {
  it('should authenticate the user and return a success message', async () => {
    // The credentials you expect the user to login with
    const loginCredentials = {
      username: "testuser",
      password: "testpassword"
    };

    // Simulating a POST request to the login endpoint
    const response = await request(app)
      .post('/login') // Adjust this to your actual login endpoint
      .send(loginCredentials);

    // Assertions to check if the response is as expected
    expect(response.statusCode).toBe(404); // Assuming 200 indicates a successful login
    expect(response.body).toEqual({
      message: 'Login success' // This message should match your actual success response
    });
  });

  // Add more tests as needed for other scenarios, like invalid credentials
});
