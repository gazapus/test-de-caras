import styled, { keyframes } from 'styled-components';
import brakpoints from '../utils/breakpoins';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const SpinnerStyled = styled.div`
    display: flex;
    border-style: solid;
    border-radius: 100%;
    border-color:  ${props => props.color1} ${props => props.color2} ${props => props.color1} ${props => props.color2};
    animation-name: ${rotation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    box-shadow: 0 0px 30px rgba(192, 179, 144, 0.863);
    @media ${brakpoints.mobile} {
        width: ${props => props.size}vmax;
        height: ${props => props.size}vmax;
        border-width: ${props => props.size - props.size/2}vmax;
    }
    @media ${brakpoints.tablet} {
        width: ${props => props.size}vmin;
        height: ${props => props.size}vmin;
        border-width: ${props => props.size - props.size/2}vmin;
    }
`

function Spinner({ size = 10, color1 = "red", color2="blue" }) {
    return (
        <SpinnerStyled 
            size={size}
            color1={color1}
            color2={color2}
        />
    )
}

export default Spinner;