import { z } from 'zod';

export const registerSchema = z.object({
  email:    z.string({ required_error: "Email is required" })
             .email("Format email invalide")
             .max(255),

  password: z.string({ required_error: "Password is required" })
             .min(6,  "Minimum 6 caractères")
             .max(100, "Maximum 100 caractères"),

  phone:    z.string()
             .regex(/^\+?[0-9]{8,20}$/, "phone must be a valid phone number")
             .optional(),
});

export const loginSchema = z.object({
  email:    z.string({ required_error: "Email is required" })
             .email("Format email invalide"),

  password: z.string({ required_error: "Password is required" })
             .min(1, "Password is required"),
});