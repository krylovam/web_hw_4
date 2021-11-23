import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello world from Express');
});

app.listen(3000, () => {
    console.log('Express started');
});