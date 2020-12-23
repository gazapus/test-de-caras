import Test from '../components/Test';
import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import { StyledH3 } from '../styles/StyledTitles';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0 2em 0;
`

function TestPage() {
    const [testFinished, setTestFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTestFinished(true);
        }, 3000)
    }, [])

    return(
        <PageContainer showAppBar={false}>
            <StyledContainer>
                <StyledH3>TEST</StyledH3>
                <Test/>
            </StyledContainer>
            <Modal open={testFinished} handleClose={() => setTestFinished(false)}>
                <p>asdasdasd asd asd asdasdasdadadad   adadsd asdasdasdasdasd</p>
                <br/>
                <p>sdasd sad sd asdasd asdasdas a sda sdasdasd asdad sd  asdasdasd asd</p>
            </Modal>
        </PageContainer>
    )
}

export default TestPage;