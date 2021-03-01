import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import Modal from "../components/Modal";
import Button from '../components/Button';
import FormProfile from '../components/FormProfile';
import { StyledH2, StyledH3, StyledP } from '../styles/StyledTitles';
import pathnames from '../utils/paths';
import brakpoints from '../utils/breakpoins';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

function Profile() {
    const history = useHistory();
    const [user, setUser] = useState({ name: '', lastname: '', email: '', id: '' });
    const [loadingEmailChange, setLoadingEmailChange] = useState(false);
    const [loadingPersonalInfoChange, setLoadingPersonalInfoChange] = useState(false);
    const [mailChanged, setMailChanged] = useState(false);

    useEffect(() => {
        AuthService.isLogged()
            .then(res => {
                const userInfo = AuthService.getCurrentUser();
                setUser({
                    name: userInfo.name,
                    lastname: userInfo.lastname,
                    email: userInfo.email,
                    id: userInfo.id
                });
            })
            .catch(err => {
                AuthService.logout();
                history.push(pathnames.home);
            })
    }, [])  

    function handleSubmit(newChanges) {
        setLoadingPersonalInfoChange(true);
        setLoadingEmailChange(true);
        const newData = {
            name: newChanges.name,
            lastname: newChanges.lastname,
            password: newChanges.newPassword
        }
        UserService.updateWithoutMail(user.id, newData)
            .then(res => { 
                AuthService.updateLocal(res.data)
                if(newChanges.email !== user.email) {
                    UserService.createEmailChange(user.id, user.email, newChanges.email)
                    .then(res => setMailChanged(true))
                    .catch(err => alert("ERROR, no se pudo cambiar el email, intente más tarde"))
                    .finally(() => setLoadingEmailChange(false));
                } else {
                    setLoadingEmailChange(false);
                    history.go(0);
                }
            })
            .catch(err => alert("ERROR, no se pudo actualizar la información"))
            .finally(() => setLoadingPersonalInfoChange(false));
    }

    return (
        <PageContainer>
            <StyledH2>MI PERFIL</StyledH2>
            <FormProfile
                handleSubmit={handleSubmit}
                loading={loadingEmailChange && loadingPersonalInfoChange}
                defaultName={user.name}
                defaultLastname={user.lastname}
                defaultEmail={user.email}
            />
            <Modal
                open={mailChanged}
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
            <StyledH3 color='#6b0000'>Se ha enviado un email para confirmar el cambio</StyledH3>
            <StyledP style={{ marginBottom: '2em' }}>
                Recuerde que debe confirmar el cambio desde la cuenta vinculada para acreditar el cambio de dirección, 
                hasta entonces seguirá vigente la dirección de mail actual.
            </StyledP>
            <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
        </StyledModalContainer>
    )
}

export default Profile;