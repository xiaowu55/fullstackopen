import diagnosesData from '../data/diagnoses.json';

import { diagnosesEntry } from '../types';

const diagnoses:Array<diagnosesEntry> = diagnosesData;

const getEntries = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return diagnoses;
};

const addDiagnoses = () => {
    return null;
};

export default {
    getEntries,
    addDiagnoses
};