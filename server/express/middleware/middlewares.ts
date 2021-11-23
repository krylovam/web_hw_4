import express from 'express';
import { getUser, getUserPermissions } from '../get-user';

export const userGetter = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const user = await getUser();

        res.locals.user = user;

        next();
    } catch (error) {
        next(error);
    }
};
export const permissionsGetter = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const permissions = await getUserPermissions(res.locals.user);

        res.locals.permissions = permissions;

        next();
    } catch (error) {
        next(error);
    }
};
export const permissionsChecker = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const permissions = res.locals.permissions;

    if (permissions !== '*') {
        // throw new Error('Denied');
        res.writeHead(403, 'Access Denied');
    }

    next();
};
export const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`Incoming request ${req.method} ${req.originalUrl}`);

    next();
};
export const responseLoggger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const originalEnd = res.end;

    res.end = function (): void {
        console.log(`Outgoing ${req.method} ${req.originalUrl} ${res.statusCode}`);

        return originalEnd.apply(
            this,
            (arguments as unknown) as [chunk: any, encoding: BufferEncoding, cb?: (() => void) | undefined],
        );
    };

    next();
};