import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class Aluno {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({unique: true})
    rm: number;
    @Column()
    nome: string;
    @Column()
    curso: string;
    @Column({nullable: true})
    photo: string;
}

export default Aluno;