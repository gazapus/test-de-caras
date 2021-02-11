import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #c2c2c2;
`
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

function Footer() {        
    return (
        <StyledFooter>
            <StyledFooterContent>
                Universidad Nacional de Loja
            </StyledFooterContent> 
        </StyledFooter>
    )
}

export default Footer;