import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(faWindowClose);

const StyledModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: ${props => props.visible ? 'flex' : 'none'};
    background-color: #000000AA;
    position: absolute;
    top: ${props => props.top}px;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledModalContent = styled.div`
    min-height: 20%; 
    max-height: 80%; 
    min-width: 10%;
    max-width: 90%;
    overflow: auto;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 1em;
`

const StyledCloseButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const idContainer = "modalContainer";

function Modal({ open, handleClose, autoClose = true, children }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if(open) {
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                setScrollPosition(document.documentElement.scrollTop);
            }, 150)
        }
    }, [open])

    function handleClickOut(e) {
        if (e.target.id === idContainer && autoClose) onClose();
    }

    function onClose() {
        document.body.style.overflow = "auto";
        handleClose();
    }

    return (
        <StyledModalContainer
            visible={open}
            onClick={handleClickOut}
            id={idContainer}
            top={scrollPosition}
        >
            <StyledModalContent>
                <StyledCloseButtonContainer>
                    <FontAwesomeIcon
                        icon={'window-close'}
                        color={'red'}
                        size="lg"
                        onClick={onClose}
                        style={{ cursor: 'pointer' }}
                    />
                </StyledCloseButtonContainer>
                {children}
            </StyledModalContent>
        </StyledModalContainer>
    )
}

export default Modal;