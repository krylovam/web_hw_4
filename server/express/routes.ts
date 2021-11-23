import express from 'express';

const router = express.Router();
let userName = '';

router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Time: ', Date.now())
    next();
});

router.get('/', (req: express.Request, res: express.Response) => {
    res.send(`Hello world ${userName || 'Express'}`);
});

router.post('/name', (req: express.Request, res: express.Response) => {
    console.log(req.body);

    userName = req.body;

    res.send('Got name');
});

export {router};