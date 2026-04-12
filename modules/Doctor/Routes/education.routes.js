// ------------------------------------------------
//                   imports
// ------------------------------------------------
import express from 'express';
import educationController from '../Controllers/education.controller.js';
import validate from '../Middlewares/validate.js';
import { createEducationSchema, updateEducationSchema } from'../Schemas/education.schema.js';


const router = express.Router();

// ------------------------------------------------
//                   education routes
// ------------------------------------------------
router.get('/', educationController.getEducations);
router.get('/:id', educationController.getEducationById);
router.post('/', validate(createEducationSchema), educationController.createEducation);
router.put('/:id', validate(updateEducationSchema), educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;