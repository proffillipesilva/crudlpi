import { DataSource } from "typeorm";
import Aluno from "./models/entities/Aluno";
import Professor from "./models/entities/Professor";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "crudlpi",
    synchronize: true,
    logging: true,
    entities: [Aluno, Professor],
    subscribers: [],
    migrations: [],
})