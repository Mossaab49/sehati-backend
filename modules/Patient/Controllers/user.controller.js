// ----------------------------------------------------------
//                      import services
// ----------------------------------------------------------
import userService from '../Services/user.service.js';

// ----------------------------------------------------------
//                      patient user controllers
// ----------------------------------------------------------

// GET api/patients/users
const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// GET api/patients/users/:id
const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// POST api/patients/users
const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// PUT api/patients/users/:id
const updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// DELETE api/patients/users/:id
const deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// ----------------------------------------------------------
//                      export controllers
// ----------------------------------------------------------
export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};