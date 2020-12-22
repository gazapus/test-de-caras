import styled from 'styled-components';
import AppBar from './AppBar';
import Footer from './Footer';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    width: 100%;
`

const StyledContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-grow: 1;
`
function PageContainer({showAppBar = true, children}) {
    return(
        <StyledContainer>
            <StyledContent>
                <AppBar auth={showAppBar}/>
                {children}
            </StyledContent>
            <Footer/>
        </StyledContainer>
    )
}

export default PageContainer;