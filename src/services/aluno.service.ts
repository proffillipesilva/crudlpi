import Aluno from "../models/Aluno";
import AlunoRepositorio from "../models/AlunoRepositorio";

class AlunoService {

    private static instance: AlunoService;
    private alunoRepositorio: AlunoRepositorio;

    private constructor(){
        this.alunoRepositorio = new AlunoRepositorio();
    }

    public static getInstance(){
        if(!AlunoService.instance){
            AlunoService.instance = new AlunoService();
        }
        return AlunoService.instance;
    }

    public saveAluno(obj: Aluno): void{
        this.alunoRepositorio.save(obj);
    }

    public getAlunos() : Aluno[] {
        return this.alunoRepositorio.getAll();
    }
}

export default AlunoService;