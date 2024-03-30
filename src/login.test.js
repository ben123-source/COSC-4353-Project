const request = require('supertest');
import app from '../backend/server.js';

describe('Login Endpoint', () => {
  // Test for successful login
  it('should allow a user to log in with correct credentials and respond with a success message', async () => {
    const loginCredentials = {
      username: "beaver",
      password: "123"
    };
    const response = await request(app)
      .post('/login') // Make sure this matches your actual login route
      .send(loginCredentials);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      message: 'Login success'
    }));
  });

  // Test for incorrect username
  it('should respond with an error for an incorrect username', async () => {
    const wrongUsername = {
      username: "wrongUsername",
      password: "123"
    };
    const response = await request(app)
      .post('/login')
      .send(wrongUsername);
    expect(response.statusCode).toBe(401); // Assuming 401 for unauthorized
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Invalid username or password'
    }));
  });

  // Test for incorrect password
  it('should respond with an error for an incorrect password', async () => {
    const wrongPassword = {
      username: "beaver",
      password: "wrongPassword"
    };
    const response = await request(app)
      .post('/login')
      .send(wrongPassword);
    expect(response.statusCode).toBe(401); // Assuming 401 for unauthorized
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Invalid username or password'
    }));
  });

  // Test for missing username or password
  it('should respond with an error if the username or password is missing', async () => {
    const missingInfo = {
      username: "beaver"
      // Password is missing
    };
    const response = await request(app)
      .post('/login')
      .send(missingInfo);
    expect(response.statusCode).toBe(400); // Assuming 400 for bad request
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Username and password are required'
    }));
  });

  // Test for server error handling
  it('should respond with a 500 status code if there is an unexpected server error', async () => {
    const credentialsToTriggerError = {
      username: "serverError",
      password: "500"
    };
    const response = await request(app)
      .post('/login')
      .send(credentialsToTriggerError);
    // Assuming your endpoint has a way to simulate or trigger server errors for test purposes
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Unexpected error occurred'
    }));
  });
});
