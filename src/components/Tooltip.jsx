import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const StyledTooltipoContainer = styled.div`
    width: min-content;
`

const StyledArrow = styled.div`
    width:0px;
    height:0px;
    border-left: ${props => props.width}px solid transparent; 
    border-right:  ${props => props.width}px solid transparent; 
    border-bottom:  ${props => props.width}px solid ${props => props.color};
    font-size:0px;
    line-height:0px;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    opacity: ${props => props.visible ? 1 : 0};
    transition-duration: 1s;
`

const StyledTooltip = styled.p`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    max-width: 12em;
    text-align: center;
    background-color: ${props => props.color};
    padding: 0.5em;
    margin: 0;
    box-sizing: border-box;
    opacity: ${props => props.visible ? 0.95 : 0};
    transition-duration: 1s;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    color: ${props => props.fontColor};
`

function Tooltip({ children, message, color="#c4c4c4", fontColor="black"}) {
    const containerRef = useRef();
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const { left, bottom, right } = containerRef.current.getBoundingClientRect();
        setPosition({ top: bottom, left: left, width: right - left });

        function setVisibleOn() {
            setVisible(true);
        }
        function setVisibleOff() {
            setVisible(false);
        }
        containerRef.current.addEventListener('mouseover', setVisibleOn);
        containerRef.current.addEventListener('mouseout', setVisibleOff);
    }, []);

    return (
        <>
            <StyledTooltipoContainer ref={containerRef}>
                {children}
                <StyledArrow
                    left={position.left}
                    top={position.top}
                    width={position.width / 8}
                    visible={visible}
                    color={color}
                />
            </StyledTooltipoContainer >
            <StyledTooltip
                left={position.left}
                top={position.top + position.width / 8}
                visible={visible}
                color={color}
                fontColor={fontColor}
            >
                {message}
            </StyledTooltip>
        </>
    )
}

export default Tooltip;