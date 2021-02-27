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
    const [loading, setLoading] = useState(false);
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

    function handleSubmit(data) {
        setLoading(true);
        const newData = {
            name: data.name,
            lastname: data.lastname,
            password: data.newPassword
        }
        UserService.updateWithoutMail(user.id, newData)
            .then(res => { AuthService.updateLocal(res.data) })
            .catch(err => alert("ERROR, no se pudo actualizar"))
            .finally(() => {
                setLoading(false);
                history.go(0);
            });
        if (data.email !== user.email) {
            setMailChanged(true);
        }

    }

    return (
        <PageContainer>
            <StyledH2>MI PERFIL</StyledH2>
            <FormProfile
                handleSubmit={handleSubmit}
                loading={loading}
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
                Si no ve el correo en su bandeja de entrada consulte en la bandeja de spam
            </StyledP>
            <Button size="small" handleClick={handleClick}>ACEPTAR</Button>
        </StyledModalContainer>
    )
}

export default Profile;