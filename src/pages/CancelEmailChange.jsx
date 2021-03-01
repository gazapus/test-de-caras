import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { StyledH3, StyledP } from '../styles/StyledTitles';
import Button from '../components/Button';
import UserService from '../services/user.service';
import Spinner from '../components/Spinner';

const StyledCenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 3em 1em 3em 1em;
`

function CancelationChange() {
    const { request_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [confirmated, setConfirmated] = useState(true);
    const history = useHistory();

    function handleClick() {
        history.push(pathnames.home)
    }

    useEffect(() => {
        UserService.cancelEmailChange(request_id)
            .then(res => setConfirmated(true))
            .catch(err => {
                console.log(err.message)
                setConfirmated(false)
            })
            .finally(() => setLoading(false))
    }, [request_id])

    if (loading) return (
        <PageContainer>
            <StyledCenterContainer>
                <StyledH3 color='#0f299e'>Procesando cambios. Por favor espere</StyledH3>
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
                            <StyledH3 color='#2c9c10'>¡Los cambios se han efectuado exitosamente!</StyledH3>
                            <StyledP style={{ marginBottom: '2em' }} textAlign="center">
                                Si la cuenta es suya recuerde cambiar la contraseña para mayor seguridad
                        </StyledP>
                            <Button size="medium" handleClick={handleClick}>Aceptar</Button>
                        </>
                        :
                        <>
                            <StyledH3 color='#a80c0c'>Hubo un error y no se pudo realizar el cambio</StyledH3>
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

export default CancelationChange;