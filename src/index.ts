import express, { Express, Request, Response } from "express";
import "reflect-metadata"
import AlunoRepositorio from "./models/AlunoRepositorio";
import ProfessorRepositorio from "./models/ProfessorRepositorio";
import AlunoService from "./services/aluno.service";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/app/hello', (req: Request, res: Response) => {
    res.json('Hello Fillipe')
})

app.get('/app/alunos', async (req:Request, res: Response) => {
    const alunoService = AlunoService.getInstance();
    res.json(await alunoService.getAlunos());
})
app.post('/app/alunos', async (req:Request, res: Response) => {
    const alunoService = AlunoService.getInstance();
    const aluno = req.body;
    const alunoCriado = await alunoService.saveAluno(aluno)
    console.log(alunoCriado)
    res.json(alunoCriado)
})

app.listen(38000, () => {
    console.log('Iniciando o servidor')
    AppDataSource.initialize().then(r => console.log('Banco iniciado'));
    console.log('Sucesso')
})