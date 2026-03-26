// ---------------------------------------------------------
//                        import services
// --------------------------------------------------------
import doctorService from '../Services/doctor.service.js';



// ---------------------------------------------------------
//                        doctor controllers
// ---------------------------------------------------------

// GET api/doctors
const getdoctors = async (req, res, next) => {
    try {
        const doctors = await doctorService.getdoctors();
        res.status(200).json(doctors);
    } catch (error) {
        next(error);
    }
};

// GET api/doctors/:id
const getDoctorById = async (req, res, next) =>{
    try {
        const doctor = await doctorService.getDoctorById(req.params.id);
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }
        res.status(200).json(doctor);
    }catch(error){
        next(error);
    }
};

// POST api/doctors
const createDoctor = async (req,res, next) =>{
    try{
        const doctor = await doctorService.createDoctor(req.body);
        res.status(201).json(doctor);
    }catch(error){
        next(error);
    }
}

// PUT api/doctors/:id
const updateDoctor = async (req, res, next) =>{
    try{
        const doctor = await doctorService.updateDoctor(req.params.id, req.body);
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }
        res.status(200).json(doctor);
    }catch(error){
        next(error);
    }
};

// DELETE api/doctors/:id
const deleteDoctor = async (req, res, next)=>{
    try {
        const doctor = await doctorService.deleteDoctor(req.params.id);
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }
        res.status(200).json({message: 'Doctor deleted successfully'});
    }catch(error){
        next(error);
    }
};





export {getdoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor};