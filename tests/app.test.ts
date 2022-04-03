import express from 'express';
import request from 'supertest';
import expressLoader from '../src/loaders/express';
import config from '../src/config';

const app = expressLoader({ app: express() });
const {
  api: { prefix },
} = config;
const status = `${prefix}/status`;

describe('Server health check', () => {
  test('Return 200 status code when GET request is made', async () => {
    const response = await request(app).get(status).send();
    expect(response.statusCode).toBe(200);
  });

  test('Allows for JSON in the request header', async () => {
    const response = await request(app).post(status).send({ status: 'happy api' });
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });

  test('Return 201 status code when POST request is made', async () => {
    const response = await request(app).post(status).send({ status: 'happy api' });
    expect(response.statusCode).toBe(201);
  });

  test('Should return the status message passed into the request within the response body', async () => {
    const message = 'extreamly hyped and happy api!';
    const response = await request(app).post(status).send({ status: message });
    expect(response.body.message).toEqual(message);
  });
});
