import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';
import ThemeContext from './ContextGenerator';
import { createGlobalStyle } from 'styled-components';
import CuprumBold from './fonts/Cuprum-Bold.ttf';
import CuprumRegular from './fonts/Cuprum-Regular.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoLight from './fonts/Roboto-Light.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Cuprum-Bold';
        src: url(${CuprumRegular}) format('truetype');
    }
    @font-face {
        font-family: 'Cuprum';
        src: url(${CuprumBold}) format('truetype');
    }
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
