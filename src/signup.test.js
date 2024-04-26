const request = require('supertest');
import app from '../backend/server.js';

describe('Signup Endpoint', () => {
  // Test for successful user signup
  it('should allow a new user to sign up and respond with a success message', async () => {
    const newUser = {
      username: "quagmire",
      password: "bro"
    };
    const response = await request(app)
      .post('/signup')
      .send(newUser);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      message: 'Signup success'
    }));
  });

  // Test for attempting to sign up with an existing username
  it('should respond with an error if the username already exists', async () => {
    const existingUser = {
      username: "quagmire",
      password: "bro"
    };
    const response = await request(app)
      .post('/signup')
      .send(existingUser);
    expect(response.statusCode).toBe(409); // Assuming 409 for conflict error
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Username already exists'
    }));
  });

  // Test for missing username or password in the request
  it('should respond with an error if required fields (username or password) are missing', async () => {
    const incompleteUserData = {
      username: "newuser"
      // password is missing
    };
    const response = await request(app)
      .post('/signup')
      .send(incompleteUserData);
    expect(response.statusCode).toBe(400); // Assuming 400 for bad request
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Missing username or password'
    }));
  });

  // Test for weak password
  it('should respond with an error if the password does not meet the security criteria', async () => {
    const userWithWeakPassword = {
      username: "secureuser",
      password: "123" 
    };
    const response = await request(app)
      .post('/signup')
      .send(userWithWeakPassword);
    expect(response.statusCode).toBe(422); // Assuming 422 for unprocessable entity
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Password does not meet the security criteria'
    }));
  });

  // Test for server error handling
  it('should respond with a 500 status code if there is an unexpected server error', async () => {
    const userToTriggerServerError = {
      username: "erroruser",
      password: "trigger500"
    };
    const response = await request(app)
      .post('/signup')
      .send(userToTriggerServerError);
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(expect.objectContaining({
      error: 'Unexpected server error'
    }));
  });
});
