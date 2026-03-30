// ------------------------------------------------
//                   imports
// ------------------------------------------------
import express from 'express';
import educationController from '../Controllers/education.controller.js';
const router = express.Router();


// ------------------------------------------------
//                   education routes
// ------------------------------------------------
router.get('/', educationController.getEducations);
router.get('/:id', educationController.getEducationById);
router.post('/', educationController.createEducation);
router.put('/:id', educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;