import Professor from "./Professor";
import Repositorio from "./Repositorio";

class ProfessorRepositorio extends Repositorio<Professor> {
    get_name(): string {
        return "tb_professores";
    }
    

}

export default ProfessorRepositorio;