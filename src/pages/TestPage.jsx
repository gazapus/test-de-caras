import Test from '../components/Test';
import styled from "styled-components";
import PageContainer from '../components/PageContainer';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em 0 2em 0;
`

function TestPage() {
    return(
        <PageContainer>
            <StyledContainer>
                <Test/>
            </StyledContainer>
        </PageContainer>
    )
}

export default TestPage;