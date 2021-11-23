import { AsyncLocalStorage } from 'async_hooks';
import express from 'express';
import {nanoid} from 'nanoid';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

const useContext = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const store: Map<string, string> = new Map();

    asyncLocalStorage.run(store, () => next());
};
const createContext = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const contextStore = asyncLocalStorage.getStore();

    contextStore!.set('requestMethod', req.method);
    contextStore!.set('requestId', nanoid());
    contextStore!.set('requestUrl', req.originalUrl);

    next();
};

export {
    useContext,
    createContext,
    asyncLocalStorage,
};