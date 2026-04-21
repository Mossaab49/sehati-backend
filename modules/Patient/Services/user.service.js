// ----------------------------------------------------------
//                      import prismaclient
// ----------------------------------------------------------
import { PrismaClient } from '../../../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DB_URL,
});
const prisma = new PrismaClient({ adapter });
// ----------------------------------------------------------
//                      patient user services
// ----------------------------------------------------------

// Get all patient users
const getUsers = async () => {
    return await prisma.patientUser.findMany({
        include: { patient: { select: { firstName: true, lastName: true } } }
    });
};

// Get patient user by id
const getUserById = async (id) => {
    return await prisma.patientUser.findUnique({
        where: { id: id },
        include: { patient: { select: { firstName: true, lastName: true } } }
    });
};

// Create a new patient user
const createUser = async (data) => {
    return await prisma.patientUser.create({
        data: {
            email: data.email,
            passwordHash: data.passwordHash,
            phone: data.phone,
        }
    });
};

// Update patient user
const updateUser = async (id, data) => {
    return await prisma.patientUser.update({
        where: { id: id },
        data: data
    });
};

// Delete patient user
const deleteUser = async (id) => {
    return await prisma.patientUser.delete({
        where: { id: id }
    });
};

// ----------------------------------------------------------
//                      export services
// ----------------------------------------------------------
export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};