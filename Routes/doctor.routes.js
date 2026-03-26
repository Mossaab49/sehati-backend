// ------------------------------------------------
//                   import controllers
// ------------------------------------------------
import express from 'express';
import {getdoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor} from '../Controllers/doctor.controller.js';
const router = express.Router();


// ------------------------------------------------
//                   doctor routes
// ------------------------------------------------
router.get('/',getdoctors);
router.get('/:id',getDoctorById);
router.post('/',createDoctor);
router.put('/:id',updateDoctor);
router.delete('/:id',deleteDoctor);












export default router;