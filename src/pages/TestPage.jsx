import Test from '../components/Test';
import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import { StyledH3, StyledH4, StyledP } from '../styles/StyledTitles';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import brakpoints from '../utils/breakpoins';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import TestService from '../services/test.service';
import LocalStorageService from '../services/localstorage.service';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0 2em 0;
`

function TestPage() {
    const [testFinished, setTestFinished] = useState(false);
    const [successfullySaved, setSuccefullySaved] = useState(false);
    const [selectedFaces, setSelectedFaces] = useState(Array(60).fill(-1));
    const history = useHistory();
    const THREE_MINUTES = 180000;

    useEffect(() => {
        let groupData = LocalStorageService.getGroupData();
        let userData = LocalStorageService.getUserData();
        if(!groupData || !userData) history.push(pathnames.home);
        setTimeout(() => setTestFinished(true), THREE_MINUTES);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        if(testFinished){
            console.log(selectedFaces);
        }
    }, [testFinished])

    const finishTest = () => history.push(pathnames.home)

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
            <Modal open={testFinished} autoClose={false}>
                <ModalContent handleClick={finishTest} closeEnabled={successfullySaved} />
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

function ModalContent({ handleClick, closeEnabled }) {
    return (
        <StyledModalContainer>
            <StyledH3 color='#6b0000'>Test Finalizado</StyledH3>
            {closeEnabled ?
                <>
                    <StyledP style={{ marginBottom: '2em' }}>Gracias por participar</StyledP>
                    <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
                </>
                :
                <StyledP style={{ marginBottom: '2em' }}>Guardando datos...</StyledP>
            }
        </StyledModalContainer >
    )
}

export default TestPage;