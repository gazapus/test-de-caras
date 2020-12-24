import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';
import ThemeContext from './ContextGenerator';
import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoLight from './fonts/Roboto-Light.ttf';
import ComicBook from './fonts/ComicBook.ttf';
import TrulyMadly from './fonts/TrulyMadlyDpad.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular}) format('truetype');
    }
    @font-face {
        font-family: 'RobotoBold';
        src: url(${RobotoBold}) format('truetype');
    }
    @font-face {
        font-family: 'RobotoLight';
        src: url(${RobotoLight}) format('truetype');
    }
    @font-face {
        font-family: 'ComicBook';
        src: url(${ComicBook}) format('truetype');
    }
    @font-face {
        font-family: 'TrulyMadly';
        src: url(${TrulyMadly}) format('truetype');
    }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeContext>
        <Router>
          <Routes />
        </Router>
      </ThemeContext>
    </>
  );
}

export default App;
