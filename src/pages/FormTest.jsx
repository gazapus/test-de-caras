import styled from 'styled-components';
import FormUser from '../components/FormUser';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import PageContainer from '../components/PageContainer';
import { useEffect, useState } from 'react';
import LocalStorageService from '../services/localstorage.service';

const StyledTitle = styled.h3`
    font-family: RobotoBold;
    font-size: 1.7em;
    text-align: center;
`   

function FormPage() {
    const history = useHistory();
    const [groupPreferences, setGroupPreferences] = useState({});
    
    function handleSubmit(values) {
        LocalStorageService.setUserData(values)
        history.push(pathnames.instrucctions);
    }

    useEffect(() => {
        let groupData = LocalStorageService.getGroupData();
        if(!groupData) history.push(pathnames.home)
        setGroupPreferences(groupData)
    }, [])

    return(
        <PageContainer>
            <StyledTitle>Datos Personales</StyledTitle>
            <FormUser 
                handleSubmit={handleSubmit} 
                requestInstitutional={groupPreferences.requestInstitutionalInfo}
            />
        </PageContainer>
    )
}

export default FormPage;