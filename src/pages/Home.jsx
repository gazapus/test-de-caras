//import { useEffect } from 'react';
//import { channels } from '../../src/shared/constants';
import paths from '../utils/paths'
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { ThemeContext } from '../ContextGenerator';
import { useContext } from 'react';
import styled from 'styled-components';

//const { ipcRenderer } = window;

const StyledTitle = styled.h1`
    font-family: TrulyMadly;
    font-size: 3em;
    text-align: center;
`

const StyledButton = styled.h2`
    font-family: TrulyMadly;
    font-size: 1.5em;
    text-align: center;
`

function Home() {
    /*
    useEffect(() => {
        if (ipcRenderer) {
            /*
            ipcRenderer.sendSync(channels.APP_INFO, 'ping');
            ipcRenderer.once(channels.APP_INFO, (event, arg) => {
                console.log(arg) // prints "pong"
            })
        }
    }, []);
    */
    // ***********************************
    const { setUserData } = useContext(ThemeContext);
    setUserData(null)
    // **********************************
    return (
        <PageContainer>
            <StyledTitle>Test de Caras</StyledTitle>
            <Link to={'/test/user/6022d03d5ff9110f60263e68/0'}>
                <StyledButton>
                    EMPEZAR
                </StyledButton>
            </Link>

        </PageContainer>
    );
}

export default Home;
