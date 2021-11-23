import express from 'express';
import { controller } from './controller';
import { useContext, createContext } from './context';

const app = express();

app.use(useContext);
app.use(createContext);

app.get('/', (req: express.Request, res: express.Response) => {
    controller(req, res);
});

app.listen(3000, () => {
    console.log('Express started');
});