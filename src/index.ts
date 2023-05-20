import express, { Request, Response } from "express";
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import AlunoController from "./controllers/aluno.controller";
import { validate } from "./middlewares/validate";
import { AlunoSchema } from "./models/dto/AlunoDto";

const app = express();
app.use(express.json());

app.use(express.static('public'));


app.get('/app/hello',  (req: Request, res: Response) => {
    res.json('Hello Fillipe')
})

app.get('/app/alunos', AlunoController.getInstance().getAlunos)
app.post('/app/alunos', validate(AlunoSchema), AlunoController.getInstance().saveAluno)

app.listen(38000, () => {
    console.log('Iniciando o servidor')
    AppDataSource.initialize().then(r => console.log('Banco iniciado'));
    console.log('Sucesso')
})


