import { z } from 'zod'

const AlunoSchema = z.object({
    rm: z.coerce.number().min(1000),
    nome: z.string().min(2),
    curso: z.string().length(2)
})

const AlunoIdSchema = z.object({
    id: z.string()
})

export { AlunoSchema, AlunoIdSchema }
