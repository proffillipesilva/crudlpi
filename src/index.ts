import express, { Express, Request, Response } from "express";
import AlunoRepositorio from "./models/AlunoRepositorio";
import ProfessorRepositorio from "./models/ProfessorRepositorio";
import AlunoService from "./services/aluno.service";

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/app/hello', (req: Request, res: Response) => {
    res.json('Hello Fillipe')
})

app.get('/app/alunos', (req:Request, res: Response) => {
    const alunoService = AlunoService.getInstance();
    res.json(alunoService.getAlunos());
})
app.get('/app/professores', (req:Request, res: Response) => {
    res.json(new ProfessorRepositorio().getAll());
})

app.listen(38000, () => console.log('Hello World'))