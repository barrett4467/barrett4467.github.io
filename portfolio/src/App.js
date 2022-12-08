import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";



import Home from "./components/Home";
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
`

const App = () => {
  //sets up theme for css
  const theme = {
    mainColor: "white",
    accentColor: "#a3b18a",
    backgroundColor: "black"
    // rest of theme colors a3b18a, 3a5a40, 344e41, dad7cd, 344e41
  }
  //changes tab title
  useEffect(() => {
    document.title = "Becca Brisby"
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      {/* Sets a common style for entire app */}
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
