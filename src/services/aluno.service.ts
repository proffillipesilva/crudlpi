import fs from 'fs';
import Jimp from "jimp";
import Aluno from "../models/entities/Aluno";
import AlunoRepositorio from "../models/repositories/AlunoRepositorio";

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

    public async insertPhoto(rm: number, file: Express.Multer.File) : Promise<void> {
        const aluno = await AlunoRepositorio.findOneBy({rm});
        console.log(aluno);
        const nomeImagem = `avatar_${rm}.jpg`;
        if(aluno){
            if(file == null) return;
            const image = await Jimp.read(file.path);
            await image.resize(500, 500);
            await image.writeAsync('uploads/' + nomeImagem);
            const thumbImage = await Jimp.read(file.path);
            await thumbImage.resize(100, 100);
            await thumbImage.writeAsync('uploads/thumb_' + nomeImagem);
            const innactiveImage = await Jimp.read(file.path);
            await innactiveImage.resize(500, 500);
            await innactiveImage.grayscale();
            await innactiveImage.writeAsync('uploads/gray_' + nomeImagem);
            if(fs.existsSync(file.path))
                fs.unlinkSync(file.path);
            aluno.photo = nomeImagem;
            await AlunoRepositorio.save(aluno);
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }
}

export default AlunoService;