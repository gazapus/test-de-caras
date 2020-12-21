import Footer from './Footer';
import styled from 'styled-components';

const StyledFooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #1a1e25;
    color: #f0f0f0;
    box-sizing: border-box;
    padding: 1em;
`

function FooterBase(){
    return(
        <Footer>
            <StyledFooterContent>
                El footer irá acá
            </StyledFooterContent>
        </Footer>
    )
}

export default FooterBase;