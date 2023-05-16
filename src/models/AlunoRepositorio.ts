import { AppDataSource } from "../data-source";
import Aluno from "./Aluno";

const AlunoRepositorio = AppDataSource.getRepository(Aluno);

export default AlunoRepositorio;