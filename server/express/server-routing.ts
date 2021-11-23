import express from 'express';
import { router } from './routes';
import { routerJson } from './routes-json';

const app = express();

app.use(express.text());
app.use(router);

app.use('/json', express.json());
app.use('/json', routerJson);

app.listen(3000, () => {
    console.log('Express started');
});