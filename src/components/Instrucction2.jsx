import FaceGroup from '../components/FaceGroup';
import FaceInstruccion1 from '../images/faces-instructions/instruction-face-1.png';
import FaceInstruccion2 from '../images/faces-instructions/instruction-face-2.png';
import FaceInstruccion3 from '../images/faces-instructions/instruction-face-3.png';
import {StyledButtonContainer, StyledFacesContainer, StyledContainer, StyledText} from '../styles/StyledInstrucctions';
import Button from '../components/Button';
import { useState } from 'react';

const RIGHT_FACE = 2;

function Instrucction2({ handleNext }) {
    const [selectedFace, setSelectedFace] = useState(-1);
    function selectFace(indexSelected) {
        if (selectedFace !== RIGHT_FACE) {
            setSelectedFace(indexSelected);
        }
    }
    return (
        <StyledContainer>
            <StyledText>
                Mira este otro grupo de tres caras y haz click sobre la cara distinta
            </StyledText>
            <StyledFacesContainer>
                <FaceGroup
                    face0={FaceInstruccion1}
                    face1={FaceInstruccion2}
                    face2={FaceInstruccion3}
                    selectedFace={selectedFace}
                    onSelectFace={selectFace}
                />
            </StyledFacesContainer>
            {
                (selectedFace === RIGHT_FACE) ?
                    <>
                        <StyledText bold color="green">¡EXCELENTE!</StyledText>
                        <StyledText bold>Efectivamente la cara de la derecha es la correcta porque el pelo es diferente</StyledText>
                        <StyledButtonContainer>
                            <Button handleClick={handleNext}>SIGUIENTE</Button>
                        </StyledButtonContainer>
                    </>
                    :
                    <StyledText bold color="red">{selectedFace !== -1 ? 'Vuelve a intentarlo' : ''}</StyledText>
            }
        </StyledContainer>
    )
}

export default Instrucction2;