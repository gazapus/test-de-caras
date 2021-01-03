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

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0 2em 0;
`

function TestPage() {
    const [testFinished, setTestFinished] = useState(false);
    const userRegistered = useRegisteredUser();

    useEffect(() => {
        setTimeout(() => {
            setTestFinished(true);
        }, 3000)
    }, [])

    if(!userRegistered) return <Redirect to={pathnames.home}/>

    return(
        <PageContainer showAppBar={false}>
            <StyledContainer>
                <StyledH3>TEST</StyledH3>
                <StyledH4 
                    fontFamily="ComicBook"
                    color="#eb5732"
                >
                    Recuerde que debe hacer click sobre la cara que es diferente a las otras dos
                </StyledH4>
                <Test/>
            </StyledContainer>
            <Modal 
                open={testFinished} 
                handleClose={() => setTestFinished(false)} 
            >
                <ModalContent handleClick={() => setTestFinished(false)}/>
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

function ModalContent({handleClick}) {
    return(
        <StyledModalContainer>
            <StyledH3 color='#6b0000'>Test Finalizado</StyledH3>
            <StyledP style={{marginBottom: '2em'}}>Gracias por participar</StyledP>
            <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
        </StyledModalContainer>
    )
}

export default TestPage;