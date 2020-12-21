import styled from 'styled-components';
import FormUser from '../components/FormUser';
import { useContext } from 'react';
import { ThemeContext } from '../ContextGenerator';
import AppBar from '../components/AppBar';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import FooterBase from '../components/FooterBase';

const StyledContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const StyledTitle = styled.h3`
    font-family: RobotoBold;
    font-size: 1.7em;
    text-align: center;
`   

function FormPage() {
    const { setUserData } = useContext(ThemeContext);
    const history = useHistory();

    function handleSubmit(values) {
        console.log(values)
        setUserData({
            name: values.firstName,
            lastname: values.lastName,
            age: values.age,
            sex: values.age
        });
        history.push(pathnames.test);
    }

    return(
        <StyledContainerForm>
            <AppBar/>
            <StyledTitle>Datos Personales</StyledTitle>
            <FormUser handleSubmit={handleSubmit}/>
            <FooterBase/>
        </StyledContainerForm>
    )
}

export default FormPage;