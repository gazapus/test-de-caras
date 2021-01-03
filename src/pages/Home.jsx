//import { useEffect } from 'react';
//import { channels } from '../../src/shared/constants';
import paths from '../utils/paths'
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

import { ThemeContext } from '../ContextGenerator';
import { useContext } from 'react';

//const { ipcRenderer } = window;

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
            <Link to={paths.test}>Test</Link><br/>
            <Link to={paths.userForm}>Form</Link>
            <Link to={paths.instrucctions}>Instrucciones</Link>

        </PageContainer>
    );
}

export default Home;
