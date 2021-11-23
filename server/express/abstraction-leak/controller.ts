import express from 'express';
import { save, validate } from './operations';

export const controller = async (req: express.Request, res: express.Response) => {
    const userName = req.body.userName;

    try {
        const isValid = await validate(userName);

        if (isValid) {
            await save(res.locals.user, userName);

            res.send('OK');
        }

        res.sendStatus(400);
    } catch (error) {
        res.sendStatus(500);
    }
}