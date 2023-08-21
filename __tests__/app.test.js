const app = require('../app.js');
const request = require('supertest');

describe('testing routes', () => {
  it('should return json with a message', async () => {
    const expectedResult = {message: 'hello world'};
    const expectedStatusCode = 200;

    const response = await request(app).get('/message');
    expect(response.status).toBe(expectedStatusCode);
    expect(response.body).toEqual(expectedResult);
  });
});
