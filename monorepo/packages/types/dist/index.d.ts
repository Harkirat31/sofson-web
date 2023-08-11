import { z } from "zod";
export declare const productFields: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    price: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    price: string;
}, {
    title: string;
    description: string;
    price: string;
}>;
export type ProductFields = z.infer<typeof productFields>;
