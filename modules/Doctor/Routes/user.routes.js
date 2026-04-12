// ------------------------------------------------
//                       import modules
// ------------------------------------------------
import express from 'express';
import userController from '../Controllers/user.controller.js';
import validate from '../Middlewares/validate.js';
import { createUserSchema, updateUserSchema } from '../Schemas/user.schema.js' ;


const router = express.Router();

// ------------------------------------------------
//                   user routes
// ------------------------------------------------
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', validate(createUserSchema), userController.createUser);
router.put('/:id', validate(updateUserSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);


// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;