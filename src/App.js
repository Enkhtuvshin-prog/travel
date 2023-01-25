import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
function App() {
  const [isDarkMode, setIsDarkMode]= useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  // const theme = createTheme({
  //   palette:{
  //     mode: isDarkMode ? "dark" : "light",
  //     common: {},
  //     primary: {
  //       main: '#3f50b5',
  //       dark: '#002884',
  //     },
  //     custom: {
  //       light: '#ff7961',
  //       dark: '#ba000d',
  //       contrastText: '#000',
  //     }
  //     // backgroundColor: isDarkMode ? " purply" : " white"
  //   }
  // })
  const changeMode =() =>{
    setIsDarkMode(!isDarkMode)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home changeMode={changeMode} theme={darkTheme} />} />
        <Route path="/Second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
