// -----------------------------------------------------------
//                   import controllers
// -----------------------------------------------------------
import scheduleService from '../Services/schedule.service.js';

// ------------------------------------------------
//                   schedule controllers
// ------------------------------------------------
// GET api/doctors/schedules
const getSchedules = async (req, res, next) => {
    try {
        const schedules = await scheduleService.getSchedules();
        res.status(200).json(schedules);
    } catch (error) {
        next(error);
    }
};

// GET api/doctors/schedules/:id
const getScheduleById = async (req, res, next) => {
    try {
        const schedule = await scheduleService.getScheduleById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
};

// POST api/doctors/schedules
const createSchedule = async (req, res, next) => {
    try {
        const schedule = await scheduleService.createSchedule(req.body);    
        res.status(201).json(schedule);
    }
    catch (error) {
        next(error);
    }   
};

// PUT api/doctors/schedules/:id
const updateSchedule = async (req, res, next) => {
    try {
        const schedule = await scheduleService.updateSchedule(req.params.id, req.body);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }   
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }   
};

// DELETE api/doctors/schedules/:id 
const deleteSchedule = async (req, res, next) => {
    try {
        const schedule = await scheduleService.deleteSchedule(req.params.id);       
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        next(error);
    }   
};


// ------------------------------------------------
//                   export controllers
// ------------------------------------------------
export default {
    getSchedules,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule
};