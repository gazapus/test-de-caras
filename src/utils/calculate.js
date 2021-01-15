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

function defineEnneatypeScale(enneatype) {
    let scale = '';
    switch (enneatype) {
        case 1: scale = 'muy bajo'; break;
        case 2: scale = 'bajo'; break;
        case 3: scale = 'medio bajo'; break;
        case 4: case 5: case 6: scale = 'medio'; break;
        case 7: scale = 'medio alto'; break;
        case 8: scale = 'alto'; break;
        case 9: scale = 'muy alto'; break;
        default: scale = 'no definido'; break;
    }
    return scale;
}

function defineIciScale(iciEnneatype) {
    let scale;
    switch (iciEnneatype) {
        case 1: scale = 'muy bajo'; break;
        case 2: scale = 'debajo de la media'; break;
        case 3: case 4: case 5: scale = 'adecuado'; break;
        default: scale = 'no definido'; break;
    }
    return scale;
}

function defineNetSucessessDiagnosis(netSuccessesEnneatype) {
    let diagnosis;
    switch (netSuccessesEnneatype) {
        case 1: case 2: case 3:
            diagnosis = 'Tiene baja atención visoperceptiva y atencional. ' +
                'No realiza juicios de semejanza/diferencia adecuados y no presta la suficiente atención a los detalles.';
            break;
        case 4: case 5: case 6:
            diagnosis = 'Tiene una adecuada atención visperceptiva y atencional. ' +
                'Es capaz de atender a los detalles y de realizar un numero adecuado de juicios correctos, sin comenter muchos errores. ';
            break;
        case 7: case 8: case 9:
            diagnosis = 'Procesa de forma rápida los detalles de los estímulos visuales y es preciso en los juicios que realiza. ' +
                'Comete pocos errores y responde correctamente a un alto número de items.';
            break;
        default:
            diagnosis = 'No definido.';
            break;
    }
    return diagnosis;
}

function defineIciDiagnosis(netSuccessesEnneatype) {
    let diagnosis;
    switch (netSuccessesEnneatype) {
        case 1: case 2:
            diagnosis = 'Es impulsivo en la ejecución de la tarea, no es reflexivo a la hora de realizar los juicios de semenanza/diferencia. ' +
                'Comete un considerable numero de errores y posibles aciertos por azar.';
            break;
        case 3: case 4: case 5:
            diagnosis = 'Tiene un adecuado control de impusividad, similar a la media, ejecutando de forma reflexiva la tarea' +
                ' y por ende cometiendo pocos errores.';
            break;
        default:
            diagnosis = 'No definido.';
            break;
    }
    return diagnosis;
}

function defineAnswerType(iciEnneatype, netSuccessesEnneatype) {
    let answerType = '';
    if(iciEnneatype > 2) {
        if(netSuccessesEnneatype >= 5) {
            answerType = 'Eficaz y no impulsivo';
        } else {
            answerType = 'Ineficaz y no impulsivo';
        }
    } else {
        if(netSuccessesEnneatype >= 5) {
            answerType = 'Eficaz e impulsivo';
        } else {
            answerType = 'Ineficaz e impulsivo';
        }
    }
    return answerType;
}

function defineSubtype(iciEnneatype, successesEnneatype) {
    let subtype = '';
    if(iciEnneatype > 2) {
        if(successesEnneatype > 2) {
            subtype = 'rendimiento normal';
        } else {
            subtype = 'inatento';
        }
    } else {
        if(successesEnneatype > 2) {
            subtype = 'impulsivo';
        } else {
            subtype = 'combinado';
        }
    }
    return subtype;
}