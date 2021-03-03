import styled from 'styled-components';
import { useRef, useState } from 'react';
import Alert from './Alert';

const StyledContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    min-width: 4em;
    flex-grow: 1;
`
const StyledText = styled.input`
    background-color: ${props => props.selected ? '#c7b4b4' : '#cecece'}; 
    border-style: none none solid none;
    border-color: #EE6C4D;
    border-width: 2px;
    font-size: 1.2em;
    color:#293241;
    font-family: 'Roboto', sans-serif;
    flex-grow: 1;
    padding: 0.5em 0.6em 0.5em 0.6em;
    &:focus {
        outline: none;
    }
`
const StyledCopyButton = styled.button`
    font-family: 'Roboto', sans-serif;
    background-color: #EE6C4D;
    border-style: none;
    font-size: 1em;
    font-weight: bold;
    padding: 0.4em 0.5em 0.4em 0.5em;
    &:hover {
        cursor: pointer;
        background-color: #e96240;
    }
    &:focus {
        outline: none;
    }
`

function CopyableText({ children }) {
    const textRef = useRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [textCopied, setTextCopied] = useState(false);
    const [alertFlag, setAlertFlag] = useState(0);

    function copyText() {
        selectText();
        navigator.clipboard.writeText(children);
        setTextCopied(true);
        setAlertFlag(alertFlag + 1)
    }

    function selectText() {
        textRef.current.select();
        textRef.current.setSelectionRange(0, 99999);
    }

    return (
        <StyledContainer>
            <StyledText
                type="text"
                ref={textRef}
                value={children}
                onChange={() => { }}
                onClick={selectText}
                selected={mouseDown}
            />
            <StyledCopyButton
                onClick={copyText}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
            >
                COPIAR
            </StyledCopyButton>
            { textCopied ?
                <Alert
                    type="successful"
                    title={'Enlace copiado al portapapeles'}
                    restartFlag={alertFlag}
                /> : ''
            }

        </StyledContainer>
    )
}

export default CopyableText;