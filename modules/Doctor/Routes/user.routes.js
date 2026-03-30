// ------------------------------------------------
//                       import modules
// ------------------------------------------------
import express from 'express';
import userController from '../Controllers/user.controller.js';
const router = express.Router();

// ------------------------------------------------
//                   user routes
// ------------------------------------------------
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


// ------------------------------------------------
//                        export routes
// ------------------------------------------------
export default router;