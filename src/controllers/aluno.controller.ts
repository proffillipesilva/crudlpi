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

    public async getAlunoById(req: Request, res: Response) {
        const alunoService = AlunoService.getInstance();
        const id = req.params.id;
        res.json(await alunoService.getAlunoById(id));
    }

    public async deleteAlunoById(req: Request, res: Response) {
        const alunoService = AlunoService.getInstance();
        const id = req.params.id;
        await alunoService.deleteAlunoById(id);
        res.json('ok');
    }

    public async updateAlunoById(req: Request, res: Response) {
        const alunoService = AlunoService.getInstance();
        const id = req.params.id;
        const aluno = req.body;
        await alunoService.updateAlunoById(id, aluno);
        res.json('ok');
    }

    public async insertPhoto(req: Request, res: Response){
        try{
        const file = req.file as Express.Multer.File;
        const id = req.params.id;
        await AlunoService.getInstance().insertPhoto(id, file);
        res.json('Foto enviada')
        } catch(error){
            console.log(error);
            res.status(500).end('error')
        }
    }
}

export default AlunoController;