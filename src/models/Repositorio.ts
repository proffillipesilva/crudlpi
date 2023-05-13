import DB from "./DBMock";

abstract class Repositorio<T> {
    abstract get_name() : string;
    save<T>(t: T) : void {
        const tb_name = this.get_name();
        DB[tb_name as keyof typeof DB].push(t)
    }
    update(t: T, idx: number) : void {
        const tb_name = this.get_name();
        DB[tb_name as keyof typeof DB].splice(idx, 1, t)
    }
    delete<T>(idx: number) : void {
        const tb_name = this.get_name();
        DB[tb_name as keyof typeof DB].splice(idx, 1)
    }
    getByIdx<T>(idx: number) : T {
        const tb_name = this.get_name();
        return DB[tb_name as keyof typeof DB].at(idx)
    }
    getAll<T>() : T[] {
        const tb_name = this.get_name();
        return DB[tb_name as keyof typeof DB]
    }

    
}

export default Repositorio;