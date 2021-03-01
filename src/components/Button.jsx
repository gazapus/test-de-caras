import styled from 'styled-components';

function setSize(size) {
    let width = "";
    let height = "";
    switch (size) {
        case "small": width = '10em'; height = "2.5em"; break;
        case "medium": width = '12em'; height = "3em"; break;
        case "large": width = '20em'; height = "3.5em"; break;
        default: width= '12em';
    }
    return { width, height };
}

const StyledButton = styled.button`
    font-family: RobotoBold;
    font-size: 0.95em;
    padding: 1em;
    box-sizing: border-box;
    width: ${props => setSize(props.size).width};
    height: ${props => setSize(props.size).height};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    overflow:hidden;
    border-style: solid;
    border-radius: 0;
    border-width: 3px;
    border-color: #293241;
    background-color: #EE6C4D;
    color: #293241;
    transition-duration: 1s;

    &:focus {
        outline: none;
        background-color: #98C1D9;
    }
    &:hover {
        cursor: ${props => props.disabled ? 'wait' : 'pointer'};
        border-color: #EE6C4D;
        color: #EE6C4D;
        background-color: #293241;
    }

`

function Button({ 
    handleClick, 
    size = "medium", 
    children, 
    type="button", 
    disabled = false 
}) {
    return (
        <StyledButton
            onClick={handleClick}
            size={size}
            type={type}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button;