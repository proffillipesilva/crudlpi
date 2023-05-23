import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity()
class Aluno {
    @PrimaryColumn()
    rm: number;
    @Column()
    nome: string;
    @Column()
    curso: string;
    @Column({nullable: true})
    photo: string;
}

export default Aluno;