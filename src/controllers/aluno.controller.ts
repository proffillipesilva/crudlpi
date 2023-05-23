import { Request, Response } from "express";
import AlunoService from "../services/aluno.service";

class AlunoController {
    private static instance: AlunoController;

    private constructor(){
    }

    public static getInstance(){
        if(!AlunoController.instance){
            AlunoController.instance = new AlunoController();
        }
        return AlunoController.instance;
    }

    public async saveAluno(req: Request, res: Response) {    
        const alunoService = AlunoService.getInstance();
        const aluno = req.body;
        const alunoCriado = await alunoService.saveAluno(aluno)
        console.log(alunoCriado)
        res.json(alunoCriado)
        
    }

    public async getAlunos(req: Request, res: Response) {
        const alunoService = AlunoService.getInstance();
        res.json(await alunoService.getAlunos());
    }

    public async insertPhoto(req: Request, res: Response){
        const file = req.file as Express.Multer.File;
        const rm = parseInt(req.params.rm);
        await AlunoService.getInstance().insertPhoto(rm, file);
        res.json('Foto enviada')

    }
}

export default AlunoController;