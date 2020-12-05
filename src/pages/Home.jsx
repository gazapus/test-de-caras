import { useEffect } from 'react';
import { channels } from '../../src/shared/constants';
import paths from '../utils/paths'
import { Link } from 'react-router-dom';

const { ipcRenderer } = window;

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
    return (
        <div>
            <h1>Home</h1>
            <p>hola</p>
            <Link to={paths.test}>Test</Link>
        </div>
    );
}

export default Home;
