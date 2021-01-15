import Test from '../components/Test';
import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import { StyledH3, StyledH4, StyledP } from '../styles/StyledTitles';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import brakpoints from '../utils/breakpoins';
import useRegisteredUser from '../hooks/useRegisteredUser';
import { Redirect } from 'react-router-dom';
import pathnames from '../utils/paths';
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

    useEffect(() => {
        setTimeout(() => setTestFinished(true), 10000);
    }, [])

    useEffect(() => {
        if (testFinished) calculate();
    }, [selectedFaces, testFinished])

    function calculate() {
        const successes = calculateSuccesses(selectedFaces);
        const errors = calculateErrors(selectedFaces);
        const ici = calculateICI(successes, errors);
        let netSuccesses = calculateNetSuccesses(successes, errors);
        console.log(successes);
        console.log(errors);
        console.log(ici);
        console.log(netSuccesses);
        let baremo = defineBaremoToUse(10, "Argentina");
        console.log(baremo)
        let results = { successes, errors, netSuccesses, ici}
        let res = calculateEnneatypesAndPercentiles(baremo, results);
        console.log(res)
        console.log('\nRendimiento: ' + defineEnneatypeScale(res.netSuccessesEnneatype));
        console.log('\nImpulsividad: ' + defineIciScale(res.iciEnneatype));
        console.log(defineNetSucessessDiagnosis(res.netSuccessesEnneatype));
        console.log(defineIciDiagnosis(res.iciEnneatype));
        console.log('\nTipo de respuesta: ' + defineAnswerType(res.iciEnneatype, res.netSuccessesEnneatype));
        console.log('\nSubtipo: ' + defineSubtype(res.iciEnneatype, res.successesEnneatype));

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