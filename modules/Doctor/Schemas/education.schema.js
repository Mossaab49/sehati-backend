import { z } from 'zod';

export const createEducationSchema = z.object({
  doctorId:    z.string({ required_error: "doctorId obligatoire" })
                .uuid("doctorId doit être un UUID valide"),

  institution: z.string({ required_error: "Institution obligatoire" })
                .min(2).max(150),

  degree:      z.string({ required_error: "Diplôme obligatoire" })
                .min(2).max(150),

  fieldOfStudy: z.string().max(100).optional(),

  startDate:   z.string()
                .regex(/^\d{4}-\d{2}-\d{2}$/, "Format : YYYY-MM-DD")
                .optional(),

  endDate:     z.string()
                .regex(/^\d{4}-\d{2}-\d{2}$/, "Format : YYYY-MM-DD")
                .optional(),

  description: z.string().optional(),
});

export const updateEducationSchema = createEducationSchema
  .omit({ doctorId: true })
  .partial();

