import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Professor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    idade: number;
}

export default Professor