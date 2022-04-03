import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (env.error) {
  throw new Error('Could not locate .env file');
}

export default {
  port: process.env.PORT,
  dataBaseUser: process.env.DB_USER,
  dataBasePass: process.env.DB_PASS,
  dataBase: process.env.DB,
  dataBaseHost: process.env.DB_HOST,
  dataBasePort: parseInt(process.env.DB_PORT as string),
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api/v1',
  },
};
