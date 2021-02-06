import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import FormLogin from '../components/FormLogin';
import Modal from '../components/Modal';
import brakpoints from '../utils/breakpoins';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledH3, StyledP } from '../styles/StyledTitles';
import Button from '../components/Button';

const StyledTitle = styled.h3`
    font-family: RobotoBold;
    font-size: 1.7em;
    text-align: center;
`   

function LoginPage() {
    const [ modalOpen, setModalOpen] = useState(false);
    const history = useHistory();

    function handleSubmit(values) {
        console.log(values);
        history.push(pathnames.home)
    }

    return(
        <PageContainer>
            <StyledTitle>Iniciar Sesión</StyledTitle>
            <FormLogin handleSubmit={handleSubmit}/>
            <Modal
                open={modalOpen}
                autoClose={false}
                buttonClose={false}
            >
                <ModalContent handleClick={() => setModalOpen(false)} />
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
            <StyledH3 color='#6b0000'>¡Confirmación de registro exitosa!</StyledH3>
            <StyledP style={{ marginBottom: '2em' }}>
                Ahora puede iniciar sesión con su email y contraseña
            </StyledP>
            <Button size="small" handleClick={handleClick}>Aceptar</Button>
        </StyledModalContainer>
    )
}

export default LoginPage;