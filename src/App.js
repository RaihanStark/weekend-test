import LandingPage from "./containers/LandingPage/LandingPage";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Work Sans', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
