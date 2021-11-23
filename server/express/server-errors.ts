import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hello world');
});
app.get('/name', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    throw new Error('Some error');
});

app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send('Not found');
});

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('Something failed!');
});

app.listen(3000, () => {
    console.log('Express started');
});