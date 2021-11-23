import express from 'express';
import { saveName } from './good-service';

export const greatController = async (req: express.Request, res: express.Response) => {
    const result = await saveName(res.locals.user, req.body.userName);

    if (result instanceof Error) {
        if (result.message === 'Validation') {
            res.send(result.message).sendStatus(400);

            return;
        }

        res.send(result.message).sendStatus(500);

        return;
    }

    res.send('OK');
}