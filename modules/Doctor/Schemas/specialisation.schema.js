import { z } from 'zod';

export const createSpecialisationSchema = z.object({
  doctorId:    z.string({ required_error: "doctorId obligatoire" })
                .uuid("doctorId doit être un UUID valide"),

  name:        z.string({ required_error: "Nom obligatoire" })
                .min(2, "Nom trop court")
                .max(100, "Nom trop long"),

  description: z.string().optional(),
});

export const updateSpecialisationSchema = z.object({
  name:        z.string().min(2).max(100).optional(),
  description: z.string().optional(),
});
