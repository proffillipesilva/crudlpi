import { AppDataSource } from "../../data-source";
import Professor from "../entities/Professor";


const ProfessorRepositorio = AppDataSource.getRepository(Professor);

export default ProfessorRepositorio;