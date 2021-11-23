import express from 'express';

const routerJson = express.Router();
let userName = '';

routerJson.get('/', (req: express.Request, res: express.Response) => {
    res.send(`Hello world from ${userName || 'Express'}`);
});

routerJson.post('/name', (req: express.Request, res: express.Response) => {
    userName = req.body.userName;

    res.send('Got JSON name');
});

export {routerJson};