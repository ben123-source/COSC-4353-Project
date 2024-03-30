const request = require('supertest');
import app from '../backend/server.js';

describe('Profile Page Creation', () => {
  // Test for successful profile creation
  it('should successfully create a new profile and respond with a 200 status code', async () => {
    const profileData = {
      fullName: "John Doe",
      address1: "1234 Main St",
      address2: "Apt 101",
      city: "Anytown",
      state: "Anystate",
      zipcode: "12345"
    };
    const response = await request(app)
      .post('/profilepage')
      .send(profileData);
    expect(response.statusCode).toBe(200);
  });

  // Test for missing required fields
  it('should respond with a 400 status code if required fields are missing', async () => {
    const incompleteProfileData = {
      address1: "1234 Main St",
      city: "Anytown",
      state: "Anystate",
      zipcode: "12345"
    };
    const response = await request(app)
      .post('/profilepage')
      .send(incompleteProfileData);
    expect(response.statusCode).toBe(400);
  });

  // Test for invalid zip code format
  it('should respond with a 422 status code if the zipcode is in an invalid format', async () => {
    const profileDataWithInvalidZip = {
      fullName: "John Doe",
      address1: "1234 Main St",
      address2: "Apt 101",
      city: "Anytown",
      state: "Anystate",
      zipcode: "ABCDE"
    };
    const response = await request(app)
      .post('/profilepage')
      .send(profileDataWithInvalidZip);
    expect(response.statusCode).toBe(422);
  });

  // Test for profile creation with existing user's data
  it('should respond with a 409 status code if the profile already exists', async () => {
    const existingUserProfileData = {
      fullName: "John Doe",
      address1: "1234 Main St",
      address2: "Apt 101",
      city: "Anytown",
      state: "Anystate",
      zipcode: "12345"
    };
    const response = await request(app)
      .post('/profilepage')
      .send(existingUserProfileData);
    expect(response.statusCode).toBe(409);
  });

  // Test for server error handling
  it('should respond with a 500 status code if there is an unexpected server error', async () => {
    const profileDataToTriggerServerError = {
      fullName: "Trigger Error",
      address1: "500 Server Error St",
      address2: "Apt 500",
      city: "Errorcity",
      state: "Errorstate",
      zipcode: "50000"
    };
    const response = await request(app)
      .post('/profilepage')
      .send(profileDataToTriggerServerError);
    // Assuming your endpoint has a way to simulate or trigger server errors for test purposes
    expect(response.statusCode).toBe(500);
  });
});
