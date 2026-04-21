// ----------------------------------------------------------
//                      import modules
// ----------------------------------------------------------
import express from 'express';
import patientController from '../Controllers/patient.controller.js';
import validate from '../Middlewares/validate.js';
import { createProfileSchema, updateProfileSchema } from '../Schemas/profile.schema.js';

const router = express.Router();

// ----------------------------------------------------------
//                      import sub-routes
// ----------------------------------------------------------
import userRoutes from './user.routes.js';

// ----------------------------------------------------------
//                      patient profile routes
// ----------------------------------------------------------
router.get('/profiles', patientController.getPatients);
router.get('/profiles/:id', patientController.getPatientById);
router.post('/profiles', validate(createProfileSchema), patientController.createPatient);
router.put('/profiles/:id', validate(updateProfileSchema), patientController.updatePatient);
router.delete('/profiles/:id', patientController.deletePatient);

// ----------------------------------------------------------
//                      sub-routes
// ----------------------------------------------------------
router.use('/users', userRoutes);

// ----------------------------------------------------------
//                      export routes
// ----------------------------------------------------------
export default router;