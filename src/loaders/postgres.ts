import { Pool } from 'pg';
import config from '@config/index';

const pool = new Pool({
  user: config.dataBaseUser,
  database: config.dataBase,
  password: config.dataBasePass,
  host: config.dataBaseHost,
  port: config.dataBasePort,
});

export default pool;
