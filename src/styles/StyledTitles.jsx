import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 2em;
    text-align: center;
    font-family: ${props => props.fontFamily ? props.fontFamily : 'RobotoBold'};
    margin: 0.8em;
    color: ${props => props.color ? props.color : 'black'};
`
const StyledH3 = styled.h3`
    font-family: ${props => props.fontFamily ? props.fontFamily : 'RobotoBold'};
    font-size: 1.6em;
    text-align: center;
    margin: 0.7em;
    color: ${props => props.color ? props.color : 'black'};
`
const StyledH4 = styled.h4`
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
    font-size: 1.2em;
    font-weight: 500;
    margin: 0.6em;
    text-align: center;
    color: ${props => props.color ? props.color : 'black'};
`

const StyledP = styled.p`
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
    font-size: 1em;
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.textAlign ? props.textAlign: 'left'};
`

export {
    StyledH2, 
    StyledH3,
    StyledH4,
    StyledP,
}
