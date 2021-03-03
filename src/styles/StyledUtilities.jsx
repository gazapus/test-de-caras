import styled from 'styled-components';

const StyledShareButton = styled.a`
    font-size: 1.1.em;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.color || 'white'};
    background-color: ${props => props.backgroundColor || '#121fd6'};
    box-sizing: border-box;
    padding: 0.6em 2em 0.6em 2em;
    text-align: center;
    min-width: 15em;
    margin: 0.2em;
    text-decoration: none;
    transition-duration: 0.5s;
    &:hover {
        filter: brightness(130%);
        cursor: pointer;
    }
`

export {
    StyledShareButton
}