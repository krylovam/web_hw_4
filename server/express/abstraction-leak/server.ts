import express from 'express';
import { userGetter } from '../middleware/middlewares';
import { controller } from './controller';

const app = express();

app.use(express.json());
app.use(userGetter);

app.post('/name', (req: express.Request, res: express.Response) => {
    controller(req, res);
});

app.listen(3000, () => {
    console.log('Express started');
});