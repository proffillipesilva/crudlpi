import Aluno from "./Aluno";
import Repositorio from "./Repositorio";

class AlunoRepositorio extends Repositorio<Aluno> {
    get_name(): string {
        return "tb_alunos";
    }
    
}

export default AlunoRepositorio