// -----------------------------------------------------------
//                   import controllers
// -----------------------------------------------------------
import express from 'express';
import specialisationController from '../Controllers/specialisation.controller.js';
const router = express.Router();

// -----------------------------------------------------------
//                   specialisation routes
// -----------------------------------------------------------

router.get('/', specialisationController.getSpecialisations);
router.get('/:id', specialisationController.getSpecialisationById);
router.post('/', specialisationController.createSpecialisation);
router.put('/:id', specialisationController.updateSpecialisation);
router.delete('/:id', specialisationController.deleteSpecialisation);


// ---------------------------------------------------------
//                        export routes
// ---------------------------------------------------------
export default router;