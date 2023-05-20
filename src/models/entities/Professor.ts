import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Professor {
    @PrimaryGeneratedColumn()
    id: number;              // no max 100 min 1
    @Column()
    nome: string;            // min 2, maximo 25
    @Column()
    idade: number;           // min 18
    @Column()
    email: string;            // email
}

export default Professor