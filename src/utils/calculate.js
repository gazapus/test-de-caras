import faces from '../faces';
import BaremosEsp from '../baremos/baremos_esp.js';
import BaremosArg from '../baremos/baremos_arg.js';

const TOTAL_FACES = 60;

export function calculateSuccesses(selectedFaces) {
    let successes = 0;
    for (let i = 0; i < TOTAL_FACES; i++) {
        if (selectedFaces[i] === faces[i].different) {
            successes++;
        }
    }
    return successes;
}

export function calculateErrors(selectedFaces) {
    let errors = 0;
    for (let i = 0; i < TOTAL_FACES; i++) {
        if (selectedFaces[i] !== faces[i].different && selectedFaces[i] !== -1) {
            errors++;
        }
    }
    return errors;
}

export function calculateNetSuccesses(successes, errors) {
    return successes - errors;
}

export function calculateICI(successes, errors) {
    let ici = 0;
    if (successes + errors !== 0) {
        ici = ((successes - errors) / (successes + errors)) * 100;
    }
    return ici;
}

export function defineBaremoToUse(age, baremoCountry) {
    let baremos = (baremoCountry === "Argentina") ? BaremosArg : BaremosEsp;
    let baremo = baremos.find(e => e.age === age);
    return baremo;
}

export function calculateEnneatypesAndPercentiles(baremo, results) {
    let successesEnneatype = -1;
    let errorsEnneatype = -1;
    let netSuccessesEnneatype = -1;
    let iciEnneatype = -1;
    let successesPercentile = -1;
    let errorsPercentile = -1;
    let netSuccessesPercentile = -1;
    let iciPercentile = -1;
    for (let element of baremo.values) {
        if (element.score.successes.max >= results.successes && element.score.successes.min <= results.successes) {
            successesEnneatype = element.enneatype;
            successesPercentile = element.percentile;
        }
        if (element.score.errors.max >= results.errors && element.score.errors.min <= results.errors) {
            errorsEnneatype = element.enneatype;
            errorsPercentile = element.percentile;
        }
        if (element.score.netSuccesses.max >= results.netSuccesses && element.score.netSuccesses.min <= results.netSuccesses) {
            netSuccessesEnneatype = element.enneatype;
            netSuccessesPercentile = element.percentile;
        }
        if (element.score.ici.max >= results.ici && element.score.ici.min <= results.ici) {
            iciEnneatype = element.enneatype;
            iciPercentile = element.percentile;
        }
    }
    return {
        successesEnneatype,
        errorsEnneatype,
        netSuccessesEnneatype,
        iciEnneatype,
        successesPercentile,
        errorsPercentile,
        netSuccessesPercentile,
        iciPercentile,
    }
}