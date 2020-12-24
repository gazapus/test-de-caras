import styled, { keyframes } from 'styled-components'
import brakpoints from '../utils/breakpoins';

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const StyledText = styled.p`
    font-family: 'ComicBook';
    font-size: 1.1em;
    color: ${props => props.color ? props.color : '#293241'};
    text-align: center;
    font-weight: ${props => props.bold ? 'bold' : 100};
    margin: 1em;
    @media ${brakpoints.mobile} { 
        width: 100%;
    }
    @media ${brakpoints.desktop} { 
        width: 60%;
    }
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    animation-name: ${fadeIn};
    animation-duration: 1.2s;
`

const StyledFacesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5em 0 2.5em 0;
    box-sizing: border-box;
`

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3em 0 2em 0;
    @media ${brakpoints.tablet} { 
        justify-content: center;
        width: 100%;
    }
    @media ${brakpoints.desktop} { 
        justify-content: flex-end;
        width: 60%;
    }
`

export {
    StyledButtonContainer, StyledFacesContainer, StyledContainer, StyledText
}