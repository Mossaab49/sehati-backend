import {z} from 'zod';

export const createProfileSchema =z.object({
    doctorUserId:   z.string({ required_error: "Doctor User ID is required" })
                     .uuid("Doctor User ID must be a valid UUID"),

    firstName:      z.string({ required_error: "First name is required" })
                     .min(2, "First name must be at least 2 characters")
                     .max(255, "First name must be less than 255 characters"),

    lastName:       z.string({ required_error: "Last name is required" })
                     .min(2, "Last name must be at least 2 characters")
                     .max(255, "Last name must be less than 255 characters"),

    gender:         z.enum(['male', 'female'], {
                     errorMap: () => ({ message: "Gender is invalid" })
                    }).optional(),

    dateOfBirth:    z.string()
                     .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in YYYY-MM-DD format")
                     .optional(),

    city:           z.string().max(100).optional(),

    fullAddress:   z.string().max(255).optional(),

    latitude:      z.number()
                    .min(-90, "Latitude must be between -90 and 90")
                    .max(90, "Latitude must be between -90 and 90")
                    .optional(),
    longitude:     z.number()
                    .min(-180, "Longitude must be between -180 and 180")
                    .max(180, "Longitude must be between -180 and 180")
                    .optional(),

    bio:           z.string().optional(),

    yearsExp:      z.string().max(50).optional(),

    specialty:     z.string().max(100).optional(),

    licenceNbr:    z.string().max(100).optional(),

    price:         z.number().positive("Price must be a positive number").optional(),

    diplomaUrl:    z.string().url("Diploma URL must be a valid URL").optional(),
 
    licenceUrl:    z.string().url("Licence URL must be a valid URL").optional(),                
 
    pictureUrl:    z.string().url("Profile picture URL must be a valid URL").optional(),

});


export const updateProfileSchema = createProfileSchema
    .omit({ doctorUserId: true })
    .partial();



