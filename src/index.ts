import express, { Express, Request, Response } from "express";

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/app/hello', (req: Request, res: Response) => {
    res.json('Hello World')
})

app.listen(38000, () => console.log('Hello World'))