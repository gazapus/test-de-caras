import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pathnames from '../utils/paths';

const StyledText = styled.h1`
    color: white;
    font-family: RobotoBold;
    font-size: 1.2em;
    letter-spacing: 0.2em;
`

function Logo() {
    return (
        <Link style={{textDecoration: 'none'}} to={pathnames.home}>
            <StyledText>CARAS-R</StyledText>
        </Link>
    )
}

export default Logo;