import express from 'express';
import { permissionsChecker, permissionsGetter, responseLoggger, userGetter } from './middlewares';

const app = express();

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`Incoming request ${req.originalUrl} ${req.method}`);

    next();
});
app.use(responseLoggger);
app.use(userGetter);
app.use(permissionsGetter);
app.use(permissionsChecker);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Express started');
});