import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { StyledH2 } from '../styles/StyledTitles';
import FaceGroup from '../components/FaceGroup';
import FaceInstruccion1 from '../images/faces-instructions/instruction-face-1.png';
import FaceInstruccion2 from '../images/faces-instructions/instruction-face-2.png';
import FaceInstruccion3 from '../images/faces-instructions/instruction-face-3.png';
import Button from '../components/Button';
import brakpoints from '../utils/breakpoins';

const StyledText = styled.p`
    font-family: 'ComicBook';
    font-size: 1.1em;
    color: #293241;
    text-align: center;
    font-weight: ${props => props.bold ? 'bold' : 100};
    margin: 1em;
`

function Instrucctions() {
    return (
        <PageContainer showAppBar={false}>
            <StyledH2 fontFamily='TrulyMadly' color="#1d2635">INSTRUCCIONES</StyledH2>
            <InstrucctionContainer />
        </PageContainer>
    )
}

export default Instrucctions;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
`

const StyledFacesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    box-sizing: border-box;
`

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3em 0 2em 0;
    @media ${brakpoints.tablet} { 
        justify-content: center;
        width: 100%;
    }
    @media ${brakpoints.desktop} { 
        justify-content: flex-end;
        width: 60%;
    }
`

function InstrucctionContainer() {
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
                <Button>SIGUIENTE</Button>
            </StyledButtonContainer>
        </StyledContainer>
    )
}