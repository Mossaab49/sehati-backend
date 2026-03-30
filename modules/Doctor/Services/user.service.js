// ----------------------------------------------------------
//                      import prismaclient
// ---------------------------------------------------------
import { PrismaClient } from '../../../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';


const adapter = new PrismaPg({
    connectionString: process.env.DB_URL,
});
const prisma = new PrismaClient({ adapter });

// ---------------------------------------------------------
//                        doctor services
// ---------------------------------------------------------

// Get all doctors
const getUsers = async()=>{
    return await prisma.doctorUser.findMany({
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Get doctor by id
const getUserById = async (id) => {
    return await prisma.doctorUser.findUnique({
        where: { id: id },
        include: { doctor: { select: { firstName: true, lastName: true } } }
    });
};

// Create a new doctor
const createUser = async (data) => {
    return await prisma.doctorUser.create({
        data: {
            email: data.email,
            passwordHash: data.passwordHash,
            phone: data.phone,
        }
    });
};

// Update doctor
const updateUser = async (id, data) => {
    return await prisma.doctorUser.update({
        where: { id: id },
        data: data
    });
};

// Delete doctor
const deleteUser = async (id) => {
    return await prisma.doctorUser.delete({
        where: { id: id }
    });
};




// ---------------------------------------------------------
//                        export services
// ---------------------------------------------------------    

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};