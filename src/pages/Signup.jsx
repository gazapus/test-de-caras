import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import FormRegister from '../components/FormRegister';
import Modal from '../components/Modal';
import brakpoints from '../utils/breakpoins';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledH3, StyledP } from '../styles/StyledTitles';
import Button from '../components/Button';
import AuthService from '../services/auth.service';

const StyledTitle = styled.h3`
    font-family: RobotoBold;
    font-size: 1.7em;
    text-align: center;
`   

function SignUpPage() {
    const [ registerFinished, setRegisterFinished] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(values) {
        setLoading(true);
        AuthService.signup(values)
            .then(res => {
                setRegisterFinished(true);
            })
            .catch(err => {
                alert(err.response.data.message)
            })
            .finally(() => 
                setLoading(false)
            );
    }

    return(
        <PageContainer>
            <StyledTitle>Registrarse</StyledTitle>
            <FormRegister handleSubmit={handleSubmit} loading={loading}/>
            <Modal
                open={registerFinished}
                autoClose={false}
                buttonClose={false}
            >
                <ModalContent handleClick={() => history.push(pathnames.home)} />
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
            <StyledH3 color='#006b00'>Se ha enviado un email de confirmación</StyledH3>
            <StyledP style={{ marginBottom: '2em' }}>
                Si no ve el correo en su bandeja de entrada consulte en la bandeja de spam
            </StyledP>
            <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
        </StyledModalContainer>
    )
}

export default SignUpPage;