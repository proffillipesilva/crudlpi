import { AppDataSource } from "../data-source";
import Professor from "./Professor";

const ProfessorRepositorio = AppDataSource.getRepository(Professor);

export default ProfessorRepositorio;