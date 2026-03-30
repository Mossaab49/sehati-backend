// -----------------------------------------------------------
//                   import controllers
// -----------------------------------------------------------
import educationService from '../Services/education.service.js';

// -----------------------------------------------------------
//                   education controllers
// -----------------------------------------------------------

// GET api/doctors/educations
const getEducations = async (req, res, next) => {
    try {
        const educations = await educationService.getEducations();
        res.status(200).json(educations);
    }
    catch (error) {
        next(error);
    }
};

// GET api/doctors/educations/:id
const getEducationById = async (req, res, next) => {
    try {
        const education = await educationService.getEducationById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.status(200).json(education);
    }
    catch (error) {
        next(error);
    }
};

// POST api/doctors/educations
const createEducation = async (req, res, next) => {
    try {
        const education = await educationService.createEducation(req.body);
        res.status(201).json(education);
    }
    catch (error) {
        next(error);
    }
};

// PUT api/doctors/educations/:id
const updateEducation = async (req, res, next) => {
    try {
        const education = await educationService.updateEducation(req.params.id, req.body);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.status(200).json(education);
    }
    catch (error) {
        next(error);
    }
};

// DELETE api/doctors/educations/:id
const deleteEducation = async (req, res, next) => {
    try {
        const education = await educationService.deleteEducation(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.status(200).json({ message: 'Education deleted successfully' });
    } catch (error) {
        next(error);
    }
};


// ---------------------------------------------------------
//                        export controllers
// ---------------------------------------------------------
export default {
    getEducations,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation
};