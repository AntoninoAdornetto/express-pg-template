import { Router } from 'express';
import health from '@api/routes/health';

export default () => {
  const app = Router();
  health(app);
  return app;
};
