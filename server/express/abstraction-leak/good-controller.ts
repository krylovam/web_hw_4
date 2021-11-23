import express from 'express';
import { saveName } from './service';

export const goodController = async (req: express.Request, res: express.Response) => {
    await saveName(req, res);
}