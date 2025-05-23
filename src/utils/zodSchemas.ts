import { z } from "zod";

// 2. Schéma Zod avec messages en français
export const userCompleteSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  class: z.string().min(2, "Veuillez sélectionner une classe"),
});


