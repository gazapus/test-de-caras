import { useEffect } from 'react';
import { channels } from '../../src/shared/constants';

const { ipcRenderer } = window;

function App() {
    useEffect(() => {
        ipcRenderer.sendSync(channels.APP_INFO, 'ping');
        ipcRenderer.on(channels.APP_INFO, (event, arg) => {
            console.log(arg) // prints "pong"
        })
    }, []);

    return (
        <div className="App">
            <h1>Home</h1>
        </div>
    );
}

export default App;
