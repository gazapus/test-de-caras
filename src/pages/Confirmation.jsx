import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { StyledH3, StyledP } from '../styles/StyledTitles';
import Button from '../components/Button';
import AuthService from '../services/auth.service';
import Spinner from '../components/Spinner';

const StyledCenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 3em 1em 3em 1em;
`

function Confirmation({ handleClick }) {
    const { user_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [ confirmated, setConfirmated] = useState(true);
    const history = useHistory();

    function handleClick() {
        if(confirmated) {
            history.push(pathnames.login)
        } else {
            history.push(pathnames.home)
        }
    }

    useEffect(() => {
        AuthService.confirm(user_id)
            .then(res => setConfirmated(true))
            .catch(err => {
                console.log(err.message)
                setConfirmated(false)
            })
            .finally(() => setLoading(false))
    }, [])

    if(loading) return(
        <PageContainer>
            <StyledCenterContainer>
                <StyledH3 color='#0f299e'>Finalizando registro de cuenta. Por favor, espere</StyledH3>
                <Spinner size={3} />
            </StyledCenterContainer>
        </PageContainer>
    )
    
    return (
        <PageContainer>
            <StyledCenterContainer>
            {
                confirmated ?
                    <>
                        <StyledH3 color='#2c9c10'>¡Confirmación de registro exitosa!</StyledH3>
                        <StyledP style={{ marginBottom: '2em' }} textAlign="center">
                            Ahora puede iniciar sesión con su email y contraseña
                        </StyledP>
                        <Button size="medium" handleClick={handleClick}>Iniciar Sesión</Button>
                    </>
                    :
                    <>
                        <StyledH3 color='#a80c0c'>Hubo un error y no se pudo terminar con el registro</StyledH3>
                        <StyledP style={{ marginBottom: '2em' }} textAlign="center">
                            Vuelva a intentar más tarde
                        </StyledP>
                        <Button size="medium" handleClick={handleClick}>Aceptar</Button>
                    </>
            }
            </StyledCenterContainer>
            
        </PageContainer>
    )
}

export default Confirmation;