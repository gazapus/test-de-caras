import FaceGroup from '../components/FaceGroup';
import FaceInstruccion11 from '../images/faces-instructions/instruction-face-1.png';
import FaceInstruccion12 from '../images/faces-instructions/instruction-face-2.png';
import FaceInstruccion13 from '../images/faces-instructions/instruction-face-3.png';
import FaceInstruccion21 from '../images/faces-instructions/instruction2-face-1.png';
import FaceInstruccion22 from '../images/faces-instructions/instruction2-face-2.png';
import FaceInstruccion23 from '../images/faces-instructions/instruction2-face-3.png';
import FaceInstruccion31 from '../images/faces-instructions/instruction4-face-1.png';
import FaceInstruccion32 from '../images/faces-instructions/instruction4-face-2.png';
import FaceInstruccion33 from '../images/faces-instructions/instruction4-face-3.png';
import FaceInstruccion41 from '../images/faces-instructions/instruction3-face-1.png';
import FaceInstruccion42 from '../images/faces-instructions/instruction3-face-2.png';
import FaceInstruccion43 from '../images/faces-instructions/instruction3-face-3.png';
import {StyledButtonContainer, StyledContainer, StyledText} from '../styles/StyledInstrucctions';
import styled from 'styled-components';
import Button from '../components/Button';
import brakpoints from '../utils/breakpoins';

const StyledFacesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    @media ${brakpoints.mobile} { 
        width: 100%;
    }
    @media ${brakpoints.tablet} { 
        width: 60%;
    }
    @media ${brakpoints.desktop} { 
        width: 35%;
    }
`

const StyledFacesRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0 0 2px 0;
    padding: 0.5em 0 0.5em 0;
    border-color: #f0f0f0;
`

function Instrucction3({ handleNext }) {
    return (
        <StyledContainer>
            <StyledText>
                A continuación hay cuatro grupo de caras y en cada uno una cara distinta resaltada de azul con su diferencia aclarada a la izquierda
            </StyledText>
            <StyledFacesContainer>
                <StyledFacesRow>
                    <StyledText color="#ad2b0a">Pelo</StyledText>
                    <FaceGroup
                        face0={FaceInstruccion11}
                        face1={FaceInstruccion12}
                        face2={FaceInstruccion13}
                        selectedFace={2}
                    />
                </StyledFacesRow>
                <StyledFacesRow>
                    <StyledText color="#ad2b0a">Boca</StyledText>
                    <FaceGroup
                        face0={FaceInstruccion21}
                        face1={FaceInstruccion22}
                        face2={FaceInstruccion23}
                        selectedFace={1}
                    />
                </StyledFacesRow>
                <StyledFacesRow>
                    <StyledText color="#ad2b0a">Cejas</StyledText>
                    <FaceGroup
                        face0={FaceInstruccion31}
                        face1={FaceInstruccion32}
                        face2={FaceInstruccion33}
                        selectedFace={1}
                    />
                </StyledFacesRow>
                <StyledFacesRow>
                    <StyledText color="#ad2b0a">Ojos</StyledText>
                    <FaceGroup
                        face0={FaceInstruccion41}
                        face1={FaceInstruccion42}
                        face2={FaceInstruccion43}
                        selectedFace={0}
                    />
                </StyledFacesRow>
            </StyledFacesContainer>
            <StyledButtonContainer>
                <Button handleClick={handleNext}>SIGUIENTE</Button>
            </StyledButtonContainer>
        </StyledContainer>
    )
}

export default Instrucction3;