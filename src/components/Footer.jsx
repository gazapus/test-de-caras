import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import useWindowHeight from '../hooks/useWindowSize';

const StyledFooterContainer = styled.footer`
    display:  ${props => props.position ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: ${props => props.position}px;
    background-color: #c2c2c2;
`

function Footer({ children }) {
    const [footerPosition, setFooterPosition] = useState(null);
    const [footerHeight, setFooterHeight] = useState(0);
    let windowHeight = useWindowHeight();

    const footerRef = useCallback(node => {
        if (node !== null) {
            setFooterHeight(node.getBoundingClientRect().height);
        }
    });

    useEffect(() => {
        function defineFooterPosition() {
            let pageHeight = document.documentElement.getBoundingClientRect().height;
            if (pageHeight + footerHeight > windowHeight) {
                setFooterPosition(pageHeight)
            } else {
                setFooterPosition(windowHeight - footerHeight)
            }
        }
        defineFooterPosition();
    }, [footerHeight, windowHeight])

    return (
        <StyledFooterContainer position={footerPosition} ref={footerRef}>
            {children}
        </StyledFooterContainer>
    )
}

export default Footer;