import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { StyledContainer } from '../styles/StyledUtilities';
import FormGroup from '../components/FormGroup';
import GroupService from '../services/group.service';
import { cleanEmptyFields } from '../utils/functions';
import pathnames from '../utils/paths';
import { useHistory } from 'react-router-dom';

function GenerateGroup() {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(formResults) {
        setLoading(true)
        GroupService.create(cleanEmptyFields(formResults))
            .then(res => history.push({
                pathname: pathnames.group_link,
                state: { group: res.data }
            }))
            .catch(err => {
                alert('Hubo un error al crear el grupo');
                setLoading(false);
            })
    }

    return (
        <PageContainer>
            <StyledContainer>
                <FormGroup handleSubmit={handleSubmit} loading={loading} />
            </StyledContainer>
        </PageContainer>
    )
}

export default GenerateGroup;