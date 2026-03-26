// ----------------------------------------------------------
//                      import prismaclient
// ---------------------------------------------------------
import { PrismaClient } from '../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';


const adapter = new PrismaPg({
    connectionString: process.env.DB_URL,
});
const prisma = new PrismaClient({ adapter });


// ---------------------------------------------------------
//                        doctor services
// ---------------------------------------------------------

// Get all doctors
const getdoctors = async () => {
    return await prisma.doctor.findMany();
};

// Get doctor by id
const getDoctorById = async (id) => {
    return await prisma.doctor.findUnique({
        where: { id: id }
    });
};

// Create a new doctor
const createDoctor = async (data) => {
    return await prisma.doctor.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            passwordHash: data.passwordHash,
            phone: data.phone,
            gender: data.gender,
            birthday: data.birthday ? new Date(data.birthday) : null,
            city: data.city,
            fullAddress: data.fullAddress,
            latitude: data.latitude,
            longitude: data.longitude,
            bio: data.bio,
            yearsExp: data.yearsExp,
            speciality: data.speciality,
            licenceNbr: data.licenceNbr,
            price: data.price,
            diplomaUrl: data.diplomaUrl,
            licenceUrl: data.licenceUrl,
            pictureUrl: data.pictureUrl,
        }
    });
};

// Update doctor
const updateDoctor = async (id, data) => {
    return await prisma.doctor.update({
        where: { id: id },
        data: data
    });
};

// Delete doctor
const deleteDoctor = async (id) => {
    return await prisma.doctor.delete({
        where: { id: id }
    });
};

export default {
    getdoctors,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor
};

