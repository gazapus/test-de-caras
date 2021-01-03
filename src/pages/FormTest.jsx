import styled from 'styled-components';
import FormUser from '../components/FormUser';
import { useContext } from 'react';
import { ThemeContext } from '../ContextGenerator';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';

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
            sex: values.sex
        });
        history.push(pathnames.instrucctions);
    }

    return(
        <PageContainer>
            <StyledTitle>Datos Personales</StyledTitle>
            <FormUser handleSubmit={handleSubmit}/>
        </PageContainer>
    )
}

export default FormPage;