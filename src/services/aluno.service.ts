import Aluno from "../models/Aluno";
import AlunoRepositorio from "../models/AlunoRepositorio";

class AlunoService {

    private static instance: AlunoService;

    private constructor(){
    }

    public static getInstance(){
        if(!AlunoService.instance){
            AlunoService.instance = new AlunoService();
        }
        return AlunoService.instance;
    }

    public async saveAluno(obj: Aluno): Promise<Aluno>{
        return await AlunoRepositorio.save(obj);
    }

    public async getAlunos() : Promise<Aluno[]> {
        return await AlunoRepositorio.find();
    }
}

export default AlunoService;