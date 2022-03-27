import express from 'express';
import expressLoader from './express';
import pool from './postgres';
import logger from './logger';

export default async (expressApp: express.Application) => {
  await pool.connect();
  logger.info('✌️ DB loaded and connected!');

  expressLoader({ app: expressApp });
  logger.info('✌️ Express loaded');
};
