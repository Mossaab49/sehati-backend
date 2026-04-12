// -----------------------------------------------------------
//                   import controllers
// -----------------------------------------------------------
import express from 'express';
import specialisationController from '../Controllers/specialisation.controller.js';
import validate from '../Middlewares/validate.js';
import { createSpecialisationSchema, updateSpecialisationSchema } from '../Schemas/specialisation.schema.js';


const router = express.Router();
// -----------------------------------------------------------
//                   specialisation routes
// -----------------------------------------------------------

router.get('/', specialisationController.getSpecialisations);
router.get('/:id', specialisationController.getSpecialisationById);
router.post('/', validate(createSpecialisationSchema), specialisationController.createSpecialisation);
router.put('/:id', validate(updateSpecialisationSchema), specialisationController.updateSpecialisation);
router.delete('/:id', specialisationController.deleteSpecialisation);


// ---------------------------------------------------------
//                        export routes
// ---------------------------------------------------------
export default router;