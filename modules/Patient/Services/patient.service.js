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
//                      patient services
// ----------------------------------------------------------

// Get all patients
const getPatients = async () => {
    return await prisma.patient.findMany();
};

// Get patient by id
const getPatientById = async (id) => {
    return await prisma.patient.findUnique({
        where: { id: id }
    });
};

// Create a new patient
const createPatient = async (data) => {
    return await prisma.patient.create({
        data: {
            patientUserId: data.patientUserId,
            firstName:     data.firstName,
            lastName:      data.lastName,
            gender:        data.gender,
            birthday:      data.birthday ? new Date(data.birthday) : null,
            city:          data.city,
            pictureUrl:    data.pictureUrl,
        }
    });
};

// Update patient
const updatePatient = async (id, data) => {
    return await prisma.patient.update({
        where: { id: id },
        data: {
            firstName:  data.firstName,
            lastName:   data.lastName,
            gender:     data.gender,
            birthday:   data.birthday ? new Date(data.birthday) : null,
            city:       data.city,
            pictureUrl: data.pictureUrl,
        }
    });
};

// Delete patient
const deletePatient = async (id) => {
    return await prisma.patient.delete({
        where: { id: id }
    });
};

// ----------------------------------------------------------
//                      export services
// ----------------------------------------------------------
export default {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
};