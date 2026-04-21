// ----------------------------------------------------------
//                      import services
// ----------------------------------------------------------
import patientService from '../Services/patient.service.js';

// ----------------------------------------------------------
//                      patient controllers
// ----------------------------------------------------------

// GET api/patients/profiles
const getPatients = async (req, res, next) => {
    try {
        const patients = await patientService.getPatients();
        res.status(200).json(patients);
    } catch (error) {
        next(error);
    }
};

// GET api/patients/profiles/:id
const getPatientById = async (req, res, next) => {
    try {
        const patient = await patientService.getPatientById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        next(error);
    }
};

// POST api/patients/profiles
const createPatient = async (req, res, next) => {
    try {
        const patient = await patientService.createPatient(req.body);
        res.status(201).json(patient);
    } catch (error) {
        next(error);
    }
};

// PUT api/patients/profiles/:id
const updatePatient = async (req, res, next) => {
    try {
        const patient = await patientService.updatePatient(req.params.id, req.body);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        next(error);
    }
};

// DELETE api/patients/profiles/:id
const deletePatient = async (req, res, next) => {
    try {
        const patient = await patientService.deletePatient(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// ----------------------------------------------------------
//                      export controllers
// ----------------------------------------------------------
export default {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
};