import { Router } from "express";
import AlunoController from "../controllers/aluno.controller";
import { validateRequest } from "zod-express-middleware";
import { AlunoSchema } from "../models/schemas";
import upload from "../middlewares/storage";

const alunoRouter = Router();

// CREATE
alunoRouter.post('/', validateRequest({body: AlunoSchema}), AlunoController.getInstance().saveAluno)
// READ
alunoRouter.get('/', AlunoController.getInstance().getAlunos)
alunoRouter.get('/:id', AlunoController.getInstance().getAlunoById)
// UPDATE
alunoRouter.put('/:id', AlunoController.getInstance().updateAlunoById)
alunoRouter.put('/:id/photo', upload.single('avatar'), AlunoController.getInstance().insertPhoto )
// DELETE
alunoRouter.delete('/:id', AlunoController.getInstance().deleteAlunoById)




export default alunoRouter;