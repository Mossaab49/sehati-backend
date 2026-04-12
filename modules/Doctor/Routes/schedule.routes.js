// ------------------------------------------------
//                   import routes
// ------------------------------------------------
import express from 'express';
import scheduleController from '../Controllers/schedule.controller.js';
import validate from '../Middlewares/validate.js';
import { createScheduleSchema, updateScheduleSchema } from '../Schemas/schedule.schema.js';


const router = express.Router();
// ------------------------------------------------
//                   schedule routes
// ------------------------------------------------
router.get('/', scheduleController.getSchedules);
router.get('/:id', scheduleController.getScheduleById);
router.post('/', validate(createScheduleSchema), scheduleController.createSchedule);
router.put('/:id', validate(updateScheduleSchema), scheduleController.updateSchedule);
router.delete('/:id', scheduleController.deleteSchedule);

// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;