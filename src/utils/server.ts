import express from 'express';
import expressLoader from '@loaders/express';

export default function createServer() {
  const app = express();
  expressLoader({ app });
  return app;
}
