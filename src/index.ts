import express from 'express';
import loaders from '@loaders/index';

async function startServer() {
  const app = express();
  await loaders(app);
}

startServer();
