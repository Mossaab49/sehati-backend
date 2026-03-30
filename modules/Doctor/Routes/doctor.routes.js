// ------------------------------------------------
//                   import controllers
// ------------------------------------------------
import express from 'express';
import doctorController from '../Controllers/doctor.controller.js';
const router = express.Router();

// ------------------------------------------------
//                  import routes
// ------------------------------------------------
import userRoutes from './user.routes.js';
import educationRoutes from './education.routes.js';
import scheduleRoutes from './schedule.routes.js';
import specialisationRoutes from './specialisation.routes.js';

// ------------------------------------------------
//                   doctorProfiles routes
// ------------------------------------------------
router.get('/profiles', doctorController.getdoctors);
router.get('/profiles/:id', doctorController.getDoctorById);
router.post('/profiles', doctorController.createDoctor);
router.put('/profiles/:id', doctorController.updateDoctor);
router.delete('/profiles/:id', doctorController.deleteDoctor);

// ------------------------------------------------
//                   sub-routes
// ------------------------------------------------
router.use('/users', userRoutes);
router.use('/educations', educationRoutes);
router.use('/schedules', scheduleRoutes);
router.use('/specialisations', specialisationRoutes);




// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;