import { AppDataSource } from "../../data-source";
import Aluno from "../entities/Aluno";

const AlunoRepositorio = AppDataSource.getRepository(Aluno);

export default AlunoRepositorio;