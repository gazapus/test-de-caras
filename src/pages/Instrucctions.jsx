import PageContainer from '../components/PageContainer';
import { StyledH2 } from '../styles/StyledTitles';
import { useState, useEffect } from 'react';
import Instrucction1 from '../components/Instrucction1';
import Instrucction2 from '../components/Instrucction2';
import Instrucction3 from '../components/Instrucction3';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import LocalStorageService from '../services/localstorage.service';

function Instrucctions() {
    const history = useHistory();

    useEffect(() => {
        let groupData = LocalStorageService.getGroupData();
        let userData = LocalStorageService.getUserData();
        if(!groupData || !userData) history.push(pathnames.home);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [currentInstrucction, setCurrentInstrucction] = useState(0);
    const instrucctions = [
        <Instrucction1 handleNext={() => setCurrentInstrucction(currentInstrucction + 1)} />,
        <Instrucction2 handleNext={() => setCurrentInstrucction( currentInstrucction + 1)} />,
        <Instrucction3 handleNext={() => history.push(pathnames.test_play)} />,
    ];
    return (
        <PageContainer showAppBar={false}>
            <StyledH2 fontFamily='TrulyMadly' color="#1d2635">INSTRUCCIONES</StyledH2>
            {instrucctions[currentInstrucction]}
        </PageContainer>
    )
}

export default Instrucctions;