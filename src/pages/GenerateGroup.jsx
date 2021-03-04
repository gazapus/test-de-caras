import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { StyledContainer } from '../styles/StyledUtilities';
import FormGroup from '../components/FormGroup';
import GroupService from '../services/group.service';
import { cleanEmptyFields } from '../utils/functions';

function GenerateGroup() {
    const [ loading, setLoading ] = useState(false);

    function handleSubmit(formResults){
        setLoading(true)
        GroupService.create(cleanEmptyFields(formResults))
            .then(res => console.log(res))
            .catch(err => alert('Hubo un error al crear el grupo'))
            .finally(() => setLoading(false))
    }

    return (
        <PageContainer>
            <StyledContainer>
                <FormGroup handleSubmit={handleSubmit} loading={loading}/>
            </StyledContainer>

        </PageContainer>
    )
}

export default GenerateGroup;