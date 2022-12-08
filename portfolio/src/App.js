import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";



import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

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
    accentColor: "#bc4749",
    accentColor2: "#f48c06",
    backgroundColor: "black"
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
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
