import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity()
class Aluno {
    @PrimaryColumn()
    rm: number;
    @Column()
    nome: string;
    @Column()
    curso: string;
}

export default Aluno;