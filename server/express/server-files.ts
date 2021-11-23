import express from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

const app = express();

app.get('/file', (req: express.Request, res: express.Response) => {
    createReadStream(join(__dirname, '../some-file.txt')).pipe(res);
});
app.get('/download', (req: express.Request, res: express.Response) => {
    res.download(join(__dirname, '../some-file.txt'), 'hello.txt');
});

app.listen(3000, () => {
    console.log('Express started');
});