import styled from 'styled-components';
import brakpoints from '../utils/breakpoins';

const StyledText = styled.h1`
    color: white;
    font-family: RobotoBold;
    font-size: 1.2em;
    letter-spacing: 0.2em;
`

function Logo() {
    return(
        <StyledText onClick={() => console.log("hola")}>CARAS-R</StyledText>
    )
}

export default Logo;