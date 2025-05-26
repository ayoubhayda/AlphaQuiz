import { z } from "zod";

// User Complete Schema
export const userCompleteSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  class: z.string().min(2, "Veuillez sélectionner une classe"),
  serialNumber: z.coerce.number().min(1, "Le numéro dans la liste est requis")
});

// Answer Schema
export const answerSchema = z.object({
  moduleName: z.string().min(1),
  moduleSlug: z.string().min(1),
  score: z.number().min(1),
  correctAnswers: z.number().min(1),
});


