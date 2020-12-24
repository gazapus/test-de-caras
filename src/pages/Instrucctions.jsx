import PageContainer from '../components/PageContainer';
import { StyledH2 } from '../styles/StyledTitles';
import { useState } from 'react';
import Instrucction1 from '../components/Instrucction1';
import Instrucction2 from '../components/Instrucction2';
import Instrucction3 from '../components/Instrucction3';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';

function Instrucctions() {
    const history = useHistory();

    const [currentInstrucction, setCurrentInstrucction] = useState(0);
    const instrucctions = [
        <Instrucction1 handleNext={() => setCurrentInstrucction(currentInstrucction + 1)} />,
        <Instrucction2 handleNext={() => setCurrentInstrucction( currentInstrucction + 1)} />,
        <Instrucction3 handleNext={() => history.push(pathnames.test)} />,
    ];
    return (
        <PageContainer showAppBar={false}>
            <StyledH2 fontFamily='TrulyMadly' color="#1d2635">INSTRUCCIONES</StyledH2>
            {instrucctions[currentInstrucction]}
        </PageContainer>
    )
}

export default Instrucctions;