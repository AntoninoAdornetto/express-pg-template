import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/status', route);

  route.get('/', (req: Request, res: Response) => {
    res.status(200).send({
      message: 'nice and healthy',
    });
  });

  route.post('/', (req: Request, res: Response) => {
    const { status } = req.body;

    if (!status) return res.status(400).send({ errorMessage: 'Need to send a status' });

    res.status(201).send({
      message: `${status}`,
    });
  });
};
