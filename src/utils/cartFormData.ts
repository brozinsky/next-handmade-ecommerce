import { z } from "zod";

export const cartSchema = z.object({
  phone: z.string().optional(),
  email: z.string().email("Niepoprawny adres e-mail"),
  name: z.string().min(2, "Pole wymagane"),
  secondName: z.string().min(2, "Pole wymagane"),
  address: z.string().min(5, "Pole wymagane"),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/, "Niepoprawny kod pocztowy"),
  city: z.string().min(2, "Pole wymagane"),
  regulation: z.literal(true, {
    errorMap: () => ({ message: "Pole wymagane" }),
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Pole wymagane" }),
  }),
});
