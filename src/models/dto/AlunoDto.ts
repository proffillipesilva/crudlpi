import { z } from "zod";

export const AlunoSchema = z.object({
    body: z.object({
        rm: z.coerce.number().min(1),
        nome: z.string().min(5).max(30),
        curso: z.string().length(2)   // TI, EN, FA, ME, MC, EL
    })
})


