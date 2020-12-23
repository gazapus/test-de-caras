import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 2em;
    text-align: center;
    font-family: RobotoBold;
`
const StyledH3 = styled.h3`
    font-family: Roboto;
    font-size: 1.6em;
    text-align: center;
    color: ${props => props.color ? props.color : 'black'};
`

const StyledP = styled.p`
    font-family: Roboto;
    font-size: 1em;
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.textAlign ? props.textAlign: 'left'};
`

export {
    StyledH2, 
    StyledH3,
    StyledP
}
