import { z } from "zod"

export const productFields = z.object({
    title: z.string(),
    description: z.string(),
    price: z.string()

})

export type ProductFields = z.infer<typeof productFields>;