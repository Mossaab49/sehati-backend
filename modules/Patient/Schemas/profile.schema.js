import { z } from 'zod';

export const createProfileSchema = z.object({
    patientUserId: z.string({ required_error: "Patient User ID is required" })
                    .uuid("Patient User ID must be a valid UUID"),

    firstName:     z.string({ required_error: "First name is required" })
                    .min(2, "First name must be at least 2 characters")
                    .max(255, "First name must be less than 255 characters"),

    lastName:      z.string({ required_error: "Last name is required" })
                    .min(2, "Last name must be at least 2 characters")
                    .max(255, "Last name must be less than 255 characters"),

    gender:        z.enum(['male', 'female'], {
                    errorMap: () => ({ message: "Gender is invalid" })
                   }).optional(),

    birthday:      z.string()
                    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
                    .optional(),

    city:          z.string().max(100).optional(),

    pictureUrl:    z.string().url("Picture URL must be a valid URL").optional(),
});

export const updateProfileSchema = createProfileSchema
    .omit({ patientUserId: true })
    .partial();