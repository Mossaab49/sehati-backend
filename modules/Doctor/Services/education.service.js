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
//                        education services
// -----------------------------------------------------------

// Get all educations
const getEducations = async () => {
    return await prisma.education.findMany({
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Get education by id
const getEducationById = async (id) => {
    return await prisma.education.findUnique({
        where: { id: id },
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Create a new education
const createEducation = async (data) => {
    return await prisma.education.create({
        data: data
    });
};

// Update education
const updateEducation = async (id, data) => {
    return await prisma.education.update({
        where: { id: id },
        data: data
    });
};

// Delete education
const deleteEducation = async (id) => {
    return await prisma.education.delete({
        where: { id: id }
    });
};



// ---------------------------------------------------------
//                        export services
// ---------------------------------------------------------    
export default {
    getEducations,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation
};
