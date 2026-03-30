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
//                        specialisation services
// -----------------------------------------------------------

// Get all specialisations
const getSpecialisations = async () => {
    return await prisma.specialisation.findMany({
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Get a specialisation by ID
const getSpecialisationById = async (id) => {
    return await prisma.specialisation.findUnique({
        where: { id },
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Create a new specialisation
const createSpecialisation = async (data) => {
    return await prisma.specialisation.create({ data });
};

// Update a specialisation
const updateSpecialisation = async (id, data) => {
    return await prisma.specialisation.update({
        where: { id },
        data
    });
};

// Delete a specialisation
const deleteSpecialisation = async (id) => {
    return await prisma.specialisation.delete({
        where: { id }
    });
};



// -----------------------------------------------------------
//                   export services
// -----------------------------------------------------------

export default {
    getSpecialisations,
    getSpecialisationById,
    createSpecialisation,
    updateSpecialisation,
    deleteSpecialisation
};