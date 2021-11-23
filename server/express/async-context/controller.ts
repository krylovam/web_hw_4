import express from 'express';
import { asyncLocalStorage } from './context';
import { someMethod } from './service';

export const controller = (async (req: express.Request, res: express.Response) => {
    const store = asyncLocalStorage.getStore();
    const requestId = store?.get('requestId');

    console.log(`[CONTROLLER] RequestId ${requestId}`);

    await someMethod();

    res.send(requestId);
});