// -----------------------------------------------------------
//                   import services
// -----------------------------------------------------------
import { PrismaClient } from '../../../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DB_URL,
});
const prisma = new PrismaClient({ adapter });


// -----------------------------------------------------------
//                        schedule services
// -----------------------------------------------------------
// Get all schedules
const getSchedules = async () => {
    return await prisma.schedule.findMany({
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Get schedule by id
const getScheduleById = async (id) => {
    return await prisma.schedule.findUnique({
        where: { id: id },
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
}

// Create a new schedule
const createSchedule = async (data) => {
    return await prisma.schedule.create({
        data: data
    });
};

// Update schedule
const updateSchedule = async (id, data) => {
    return await prisma.schedule.update({
        where: { id: id },
        data: data
    });
};


// Delete schedule
const deleteSchedule = async (id) => {
    return await prisma.schedule.delete({
        where: { id: id }
    });
};

// ---------------------------------------------------------
//                        export services
// ---------------------------------------------------------    
export default {
    getSchedules,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule
};