import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import FormLogin from '../components/FormLogin';
import Modal from '../components/Modal';
import brakpoints from '../utils/breakpoins';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { StyledH3, StyledH4, StyledP } from '../styles/StyledTitles';
import Button from '../components/Button';
import AuthService from '../services/auth.service';

const StyledTitle = styled.h3`
    font-family: RobotoBold;
    font-size: 1.7em;
    text-align: center;
`

const StyledPseudoAnchor = styled.span`
    font-size: 1em;
    color: #3D5A80 ;
    text-decoration-color: #3D5A80;
    &:visited {
        color: #3D5A80 ;
        text-decoration-color: #3D5A80;
        font-size: 2em;
    }
    &:active {
        color: #293241 ;
        text-decoration-color: #293241;
    }
`

function LoginPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const history = useHistory();

    function handleSubmit(values) {
        AuthService.signin(values.email, values.password)
            .then(res => history.push(pathnames.home))
            .catch(err => alert(err.message))
    }

    return (
        <PageContainer>
            <StyledTitle>Iniciar Sesión</StyledTitle>
            <FormLogin handleSubmit={handleSubmit} />
            <Modal
                open={modalOpen}
                autoClose={false}
                buttonClose={false}
            >
                <ModalContent handleClick={() => setModalOpen(false)} />
            </Modal>
            <StyledH4 textAlign="center" color="#3D5A80">
                ¿No posee cuenta?  <span> </span>
                <Link to={pathnames.signup}>
                    <StyledPseudoAnchor>
                        Registrese
                    </StyledPseudoAnchor>
                </Link>
            </StyledH4>
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