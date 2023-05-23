import express, { Request, Response } from "express";
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import AlunoController from "./controllers/aluno.controller";
import { validateRequest } from "zod-express-middleware";
import { AlunoSchema } from "./models/schemas";
import upload from "./middlewares/storage";

const app = express();
app.use(express.json());

app.use(express.static('public'));


app.get('/app/hello',  (req: Request, res: Response) => {
    res.json('Hello Fillipe')
})

app.get('/app/alunos', AlunoController.getInstance().getAlunos)
app.post('/app/alunos', validateRequest({body: AlunoSchema}), AlunoController.getInstance().saveAluno)

app.put('/app/alunos/:rm/photo', upload.single('avatar'), AlunoController.getInstance().insertPhoto )

app.listen(38000, () => {
    console.log('Iniciando o servidor')
    AppDataSource.initialize().then(r => console.log('Banco iniciado'));
    console.log('Sucesso')
})


