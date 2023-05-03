import patientsDate from '../data/patients.json';

import { Patient, noSsnPatient } from '../types';


const patient: Array<Patient> = patientsDate;


const getPatients = (): noSsnPatient[] => {
    return patient.map((p) => ({ 
        id:p.id, 
        name:p.name, 
        dateOfBirth:p.dateOfBirth,
        gender:p.gender, 
        occupation:p.occupation 
     }));

};

export default { getPatients };