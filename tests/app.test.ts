import express from 'express';
import request from 'supertest';
import expressLoader from '../src/loaders/express';

const app = expressLoader({ app: express() });

describe('Check server health', () => {
  test('Should return a status of 200 when get request is made', async () => {
    const response = await request(app).get('/status').send();
    expect(response.statusCode).toBe(200);
  });
});
