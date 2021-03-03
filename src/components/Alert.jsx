import styled from 'styled-components';
import breakpoints from '../utils/breakpoins';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(faWindowClose);

const StyledContainer = styled.div`
    background-color: ${props => props.color};
    border-radius: 5px;
    min-height: 3.5em;
    min-width: 5em;
    box-sizing: border-box;
    padding: 0.5em 1em 1em 1em;
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 10px;
    right: 10px;
    @media ${breakpoints.mobile}{
        width: 94vw;
    }
    @media ${breakpoints.tablet}{
        width: 70vw;
    }
    @media ${breakpoints.desktop}{
        width: 40vw;
    }
    @media ${breakpoints.desktopL}{
        width: 30vw;
    }
`

const StyledRightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
    box-sizing: border-box;
`

const StyledAlertTitle = styled.h6`
    font-family: 'Roboto', sans-serif;
    text-align: left;
    font-size: 1.2em;
    color: #181818;
    border-style: none none ${props => props.hasMessage ? 'solid' : 'none'} none;
    border-width: 2px;
    border-color: #18181885;
    padding-bottom: 0.1em;
    box-sizing: border-box;
    margin: 0 0 0.2em 0;
`

const StyledAlertMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    text-align: left;
    font-size: 0.9em;
    color: #181818;
    box-sizing: border-box;
    margin: 0;
`

function Alert({ title, message, autoclose = true, type = "default", restartFlag }) {
    const containerRef = useRef();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!containerRef.current || !autoclose) return;
        setVisible(true);
        let escala = 0.0015;
        containerRef.current.style.opacity = 1;
        var fadeEffect = setInterval(function () {
            if (containerRef.current.style.opacity > 0) {
                containerRef.current.style.opacity -= escala;
                if (containerRef.current.style.opacity < 0.9) escala = 0.07;
            }
            else {
                clearInterval(fadeEffect);
                setVisible(false);
            }
        }, 100);
        return (() => clearInterval(fadeEffect))
    }, [containerRef, title, message, type, restartFlag]);

    let color;
    switch (type) {
        case "error": color = "#f36666"; break;
        case "successful": color = "#87f16d"; break;
        case "warning": color = "#f1e86d"; break;
        default: color = "#bbd8ff"; break;
    }

    return (
        <StyledContainer color={color} ref={containerRef} visible={visible}>
            <StyledRightContainer>
                <FontAwesomeIcon
                    icon={'window-close'}
                    color={'#c00a0a'}
                    size="lg"
                    onClick={() => setVisible(false)}
                    style={{ cursor: 'pointer' }}
                />
            </StyledRightContainer>
            {title ? <StyledAlertTitle hasMessage={message}>{title}</StyledAlertTitle> : ''}
            {message ? <StyledAlertMessage>{message}</StyledAlertMessage> : ''}
        </StyledContainer>
    )
}

export default Alert;
