import { z } from 'zod';

const DAYS = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/; 

const scheduleBase = z.object({
  doctorId:            z.string({ required_error: "doctorId obligatoire" })
                        .uuid("doctorId doit être un UUID valide"),
  dayOfWeek:           z.enum(DAYS, {
                         error: "Jour invalide ex: MONDAY"
                       }),
  startTime:           z.string({ required_error: "Heure de début obligatoire" })
                        .regex(TIME_REGEX, "Format heure : HH:MM ex: 09:00"),
  endTime:             z.string({ required_error: "Heure de fin obligatoire" })
                        .regex(TIME_REGEX, "Format heure : HH:MM ex: 17:00"),
  isAvailable:         z.boolean().optional(),
  slotDurationMinutes: z.number().int().min(5).max(120).optional(),
  location:            z.string().max(255).optional(),
});

export const createScheduleSchema = scheduleBase.refine(
  (data) => data.startTime < data.endTime,
  { message: "L'heure de début doit être avant l'heure de fin" }
);


export const updateScheduleSchema = scheduleBase
  .omit({ doctorId: true })   // ← omit sur scheduleBase, pas sur createScheduleSchema
  .partial()
  .refine(
    (data) => {
      if (data.startTime && data.endTime) {
        return data.startTime < data.endTime;
      }
      return true;
    },
    { message: "L'heure de début doit être avant l'heure de fin" }
  );