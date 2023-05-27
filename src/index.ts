import express, { Request, Response } from "express";
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import morgan from 'morgan';
import cors from 'cors'
import favicon from 'serve-favicon'
import alunoRouter from "./routes/aluno.router";

const app = express();
app.use(express.json());

app.use(cors())

app.use(express.static('public'));

app.use(favicon('public/favicon.ico'))

app.use(morgan('combined'))

app.use('/app/alunos', alunoRouter)


app.listen(38000, () => {
    console.log('Iniciando o servidor')
    AppDataSource.initialize().then(r => console.log('Banco iniciado'));
    console.log('Sucesso')
})


