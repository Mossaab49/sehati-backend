import { z } from 'zod';

export const createUserSchema = z.object({
    email:          z.string({ required_error: "Email is required" })
                    .email("Email format invalide")
                    .max(255, "Email must be less than 255 characters"),

    passwordHash:   z.string({ required_error: "Password is required" })
                    .min(8, "Password must be at least 8 characters")
                    .max(255, "Password must be less than 255 characters"),

    phone:          z.string()
                    .regex(/^\+?[0-9]{8,20}$/, "Numéro de téléphone invalide")
                    .optional(),
});

export const updateUserSchema = z.object({
    email:          z.string()
                    .email("Email format invalide")
                    .max(255, "Email must be less than 255 characters")
                    .optional(),

    passwordHash:   z.string()
                    .min(8, "Password must be at least 8 characters")
                    .max(255, "Password must be less than 255 characters")
                    .optional(),

    phone:          z.string()
                    .regex(/^\+?[0-9]{8,20}$/, "Numéro de téléphone invalide")
                    .optional(),

    status:         z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED'], {
                        errorMap: () => ({ message: "Status is invalid" })
                    }).optional(),

    emailVerified:  z.boolean().optional(),
});