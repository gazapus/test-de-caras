/*
import {
    calculateSuccesses,
    calculateErrors,
    calculateICI,
    calculateNetSuccesses,
    calculateEnneatypesAndPercentiles,
    defineEnneatypeScale,
    defineIciScale,
    defineNetSucessessDiagnosis,
    defineIciDiagnosis,
    defineAnswerType,
    defineSubtype,
    defineBaremoToUse
} from '../utils/calculate';
*/
useEffect(() => {
    function processResults() {
        const calculatedResults = calculateResults();
        const diagnoses = diagnoseResults(calculatedResults);
        const result = { ...calculatedResults, ...diagnoses };
        const personalInformation = {};
        const institutionalInformation = {
            institution: "esc",
            grade: "6",
            country: "España",
        };
        return {
            result,
            personalInformation,
            institutionalInformation,
            owner: 123,
            selectedFaces
        }
    }
    if (testFinished) {
        let data = processResults();
        TestService.create(data)
            .then(res => {
                const test_id = res.data.id;
                if (0 !== '0') {
                    GroupService.addTest(test_id, 0)
                        .then(res => console.log(res))
                        .catch(err => {
                            console.error(err);
                            alert("Error al guardar el test")
                        })
                }
            })
            .catch(err => {
                console.log(err)
                alert("Error al guardar el test")
            })
            .finally(() => setSuccefullySaved(true))
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [testFinished])


function calculateResults() {
    const successes = calculateSuccesses(selectedFaces);
    const errors = calculateErrors(selectedFaces);
    const ici = calculateICI(successes, errors);
    let netSuccesses = calculateNetSuccesses(successes, errors);
    let baremo = defineBaremoToUse(10, "Argentina");
    let {
        successesEnneatype, errorsEnneatype, netSuccessesEnneatype,
        iciEnneatype, successesPercentile, errorsPercentile,
        netSuccessesPercentile, iciPercentile,
    } = calculateEnneatypesAndPercentiles(baremo, { successes, errors, netSuccesses, ici });
    let results = {
        successes, errors, ici, netSuccesses, successesEnneatype,
        errorsEnneatype, netSuccessesEnneatype, iciEnneatype, successesPercentile,
        errorsPercentile, netSuccessesPercentile, iciPercentile
    }
    return results;
}

function diagnoseResults(results) {
    let perfomance = defineEnneatypeScale(results.netSuccessesEnneatype);
    let impulsivityControl = defineIciScale(results.iciEnneatype);
    let diagnosisNet = defineNetSucessessDiagnosis(results.netSuccessesEnneatype);
    let diagnosisICI = defineIciDiagnosis(results.iciEnneatype);
    let answerType = defineAnswerType(results.iciEnneatype, results.netSuccessesEnneatype);
    let subtype = defineSubtype(results.iciEnneatype, results.successesEnneatype);
    const diagnoses = {
        subtype,
        answerType,
        perfomance,
        impulsivityControl,
        diagnosis: diagnosisNet + ' ' + diagnosisICI
    }
    return diagnoses;
}