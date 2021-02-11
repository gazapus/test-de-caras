import Test from '../components/Test';
import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import { StyledH3, StyledH4, StyledP } from '../styles/StyledTitles';
import { useEffect, useState, useContext } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import brakpoints from '../utils/breakpoins';
import useRegisteredUser from '../hooks/useRegisteredUser';
import { Redirect } from 'react-router-dom';
import pathnames from '../utils/paths';
import { ThemeContext } from '../ContextGenerator';
import TestService from '../services/test.service';
import GroupService from '../services/group.service';

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

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0 2em 0;
`

function TestPage() {
    const [testFinished, setTestFinished] = useState(false);
    //const userRegistered = useRegisteredUser();
    const [selectedFaces, setSelectedFaces] = useState(Array(60).fill(-1));
    const { userData, owner, group } = useContext(ThemeContext);

    useEffect(() => {
        setTimeout(() => setTestFinished(true), 10000);
    }, [])

    useEffect(() => {
        function processResults() {
            const calculatedResults = calculateResults();
            const diagnoses = diagnoseResults(calculatedResults);
            const result = { ...calculatedResults, ...diagnoses };
            const personalInformation = userData;
            const institutionalInformation = {
                institution: "esc",
                grade: "6",
                country: "España",
            };
            return {
                result,
                personalInformation,
                institutionalInformation,
                owner: owner,
                selectedFaces
            }
        }
        if (testFinished) {
            let data = processResults();
            TestService.create(data)
                .then(res => {
                    const test_id = res.data.id;
                    if (group !== '0') {
                        GroupService.addTest(test_id, group)
                            .then(res => console.log(res))
                            .catch(err => console.error(err))
                    }
                })
                .catch(err => console.log(err))
        };
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

    //if(!userRegistered) return <Redirect to={pathnames.home}/>

    return (
        <PageContainer showAppBar={false}>
            <StyledContainer>
                <StyledH3>TEST</StyledH3>
                <StyledH4
                    fontFamily="ComicBook"
                    color="#eb5732"
                >
                    Recuerde que debe hacer click sobre la cara que es diferente a las otras dos
                </StyledH4>
                <Test handleSelect={setSelectedFaces} />
            </StyledContainer>
            <Modal
                open={testFinished}
                handleClose={() => setTestFinished(false)}
            >
                <ModalContent handleClick={() => setTestFinished(false)} />
            </Modal>
        </PageContainer>
    )
}

const StyledModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-bottom: 2em;
    border-style: solid;
    border-width: 2px;
    border-color: #ececec;
    @media ${brakpoints.mobile} { 
        width: 80vw;
    }
    @media ${brakpoints.tablet} { 
        width: 60vw;
    }
    @media ${brakpoints.desktop} { 
        width: 50vw;
    }
    @media ${brakpoints.desktopL} { 
        width: 40vw;
    }
`

function ModalContent({ handleClick }) {
    return (
        <StyledModalContainer>
            <StyledH3 color='#6b0000'>Test Finalizado</StyledH3>
            <StyledP style={{ marginBottom: '2em' }}>Gracias por participar</StyledP>
            <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
        </StyledModalContainer>
    )
}

export default TestPage;