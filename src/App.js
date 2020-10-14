import React from 'react';
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/toggler";

import './App.css';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes"

function App() {
   const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />          
        </div>
      </>
    </ThemeProvider>
    
  );
}

export default App;
