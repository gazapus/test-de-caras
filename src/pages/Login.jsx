import styled from 'styled-components';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import FormLogin from '../components/FormLogin';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {  StyledH4 } from '../styles/StyledTitles';
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
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(values) {
        setLoading(true);
        let error = await AuthService.signin(values.email, values.password, values.keepLogged);
        if (error) {
            setLoading(false);
            alert(error);
        } else {
            history.push(pathnames.home);
        }
    }

    return (
        <PageContainer>
            <StyledTitle>Iniciar Sesión</StyledTitle>
            <FormLogin handleSubmit={handleSubmit} loading={loading} />
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

export default LoginPage;