// ------------------------------------------------
//                   import routes
// ------------------------------------------------
import express from 'express';
import scheduleController from '../Controllers/schedule.controller.js';
const router = express.Router();

// ------------------------------------------------
//                   schedule routes
// ------------------------------------------------
router.get('/', scheduleController.getSchedules);
router.get('/:id', scheduleController.getScheduleById);
router.post('/', scheduleController.createSchedule);
router.put('/:id', scheduleController.updateSchedule);
router.delete('/:id', scheduleController.deleteSchedule);

// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;