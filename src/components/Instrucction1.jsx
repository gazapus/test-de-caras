import FaceGroup from '../components/FaceGroup';
import FaceInstruccion1 from '../images/faces-instructions/instruction2-face-1.png';
import FaceInstruccion2 from '../images/faces-instructions/instruction2-face-2.png';
import FaceInstruccion3 from '../images/faces-instructions/instruction2-face-3.png';
import {StyledButtonContainer, StyledFacesContainer, StyledContainer, StyledText} from '../styles/StyledInstrucctions';
import Button from '../components/Button';

function Instrucction1({ handleNext }) {
    return (
        <StyledContainer>
            <StyledText>
                Observe el siguiente grupo de caras.<br />
                Una cara está marcada de color azul porque es distinta a las otras dos.
            </StyledText>
            <StyledFacesContainer>
                <FaceGroup
                    face0={FaceInstruccion1}
                    face1={FaceInstruccion2}
                    face2={FaceInstruccion3}
                    selectedFace={2}
                />
            </StyledFacesContainer>
            <StyledText bold>La boca es la parte distinta</StyledText>
            <StyledButtonContainer>
                <Button handleClick={handleNext}>SIGUIENTE</Button>
            </StyledButtonContainer>
        </StyledContainer>
    )
}

export default Instrucction1;