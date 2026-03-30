// -----------------------------------------------------------
//                   import controllers
// -----------------------------------------------------------
import specialisationService from "../Services/specialisation.service.js";


// -----------------------------------------------------------
//                   specialisation controllers
// -----------------------------------------------------------

// GET api/doctors/specialisations
const getSpecialisations = async (req, res, next) => {
    try {
        const specialisations = await specialisationService.getSpecialisations();
        res.status(200).json(specialisations);
    } catch (error) {
        next(error);
    }
};

// GET api/doctors/specialisations/:id
const getSpecialisationById = async (req, res, next) => {
    try {
        const specialisation = await specialisationService.getSpecialisationById(req.params.id);    
        if (!specialisation) {
            return res.status(404).json({ message: 'Specialisation not found' });
        }
        res.status(200).json(specialisation);
    }
    catch (error) {
        next(error);
    }
};

// POST api/doctors/specialisations
const createSpecialisation = async (req, res, next) => {
    try {
        const specialisation = await specialisationService.createSpecialisation(req.body);
        res.status(201).json(specialisation);
    } catch (error) {
        next(error);
    }
};

// PUT api/doctors/specialisations/:id
const updateSpecialisation = async (req, res, next) => {
    try {
        const specialisation = await specialisationService.updateSpecialisation(req.params.id, req.body);
        if (!specialisation) {
            return res.status(404).json({ message: 'Specialisation not found' });
        }
        res.status(200).json(specialisation);
    } catch (error) {   
        next(error);
    }   
};

// DELETE api/doctors/specialisations/:id
const deleteSpecialisation = async (req, res, next) => {
    try {
        const specialisation = await specialisationService.deleteSpecialisation(req.params.id);
        if (!specialisation) {
            return res.status(404).json({ message: 'Specialisation not found' });
        }
        res.status(200).json({ message: 'Specialisation deleted successfully' });
    } catch (error) {
        next(error);
    }
};


// -----------------------------------------------------------
//                   export controllers
// -----------------------------------------------------------

export default {
    getSpecialisations,
    getSpecialisationById,
    createSpecialisation,
    updateSpecialisation,
    deleteSpecialisation
};