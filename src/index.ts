import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import {
  corsOptions,
} from './constants';
import config from './config';

const app: Application = express();
const port = config.port || 7777;

/*
  Global Middlewares
*/
app.use(cors(corsOptions));
app.use(express.json());

/*
  Routes

  app.get('/', (req: Request, res: Response) => {});
*/
app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
  });
});

/*
  Start Server
*/
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
