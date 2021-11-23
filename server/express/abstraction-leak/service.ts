import express from 'express';
import { save, validate } from './operations';

export const saveName = async (req: express.Request, res: express.Response) => {
    const userName = req.body.userName;

    try {
        const isValid = await validate(userName);

        if (isValid) {
            await save(res.locals.user, userName);
        }

        res.send('OK');
    } catch (error) {
        res.sendStatus(500);
    }
}