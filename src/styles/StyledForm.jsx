import styled from 'styled-components';
import brakpoints from '../utils/breakpoins';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    border-width: 2px;
    border-color: #d3d9e2;
    @media ${brakpoints.mobile} { 
        width: 100%;
        border-style: none;
        padding: 1em;
    }
    @media ${brakpoints.tablet} { 
        width: 55%;
        border-style: solid;
        padding: 3em;
    }
    @media ${brakpoints.desktop} { 
        width: 36%;
    }
    @media ${brakpoints.desktopL} { 
        width: 33%;
    }
`

const StyledInput = styled.input`
    border-style: solid;
    height: 2.6em;
    padding-left: 1em;
    box-sizing: border-box;
    font-size: 1em;
    padding: 0 1em 0 1em;
    color: #353535;
    border-color: ${props => props.error ? '#e43f3f' : '#181818'};
    border-width: 0 0 2px 0;
    background-color: #f0f0f0;
    border-color: #292929;
    width: 100%;
    text-align: ${props => props.align ? props.align : 'left'};
    &:focus {
        outline: none;
        background-color:#E0FBFC;
        border-color: #3b3d58;
    }
`

const StyledLabel = styled.label`
    font-size: 1em;
    margin-left: 0.5em;
`

const StyledErrorMessage = styled.small`
    font-size: 0.8em;
    color: #e43f3f;
    margin-right: 0.5em;
    font-family: RobotoLight;
    margin-bottom: 1em;
    width: 100%;
    text-align: right;
    height: 1.2em;
`
const StyledRadioesContainer = styled.div`
    background-color: #e7e7e7;
    padding: 0em 0 1em 0;
`

const StyledRadioContainer = styled.div`
    margin: 1em 0 0 1em;
    padding-right: 1.5em;
`
const StyledRadio = styled.input`
    margin-right: 1em;
    transform: scale(1.5);
    &:checked {
        color: red;
    }
    &:hover {
        cursor: pointer;
    }
`

const StyledCheckbox = styled.input`
    margin-right: 1em;
    transform: scale(1.5);
    &:checked {
        color: blue;
    }
    &:hover {
        cursor: pointer;
    }
`

export {
    StyledForm, 
    StyledInput, 
    StyledLabel, 
    StyledErrorMessage,
    StyledRadioesContainer,
    StyledRadioContainer,
    StyledRadio,
    StyledCheckbox
}
