import diagnosesData from '../data/diagnoses.json';

import { Diagnose} from '../types';

const diagnoses:Array<Diagnose> = diagnosesData;


const getEntries = () => {
    return diagnoses;
};

const addDiagnoses = () => {
    return null;
};

export default {
    getEntries,
    addDiagnoses
};