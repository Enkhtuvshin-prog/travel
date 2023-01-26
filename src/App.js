import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import DetailCard from "./component/Detail";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode == true
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: "#FFF",
              secondary: "#fff",
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: light,
              // paper: light,
            },
            text: {
              primary: "#000",
              secondary: "#000",
            },
          }),
      // common: {},
      // primary: {
      //   main: "#3f50b5",
      //   dark: "#002884",
      //   text: {
      //     primary: "#000",
      //   },
      // },
      // custom: {
      //   light: "#ff7961",
      //   dark: "#ba000d",
      //   contrastText: "#000",
      //   text: {
      //     primary: "#fff",
      //   },
      // },
    },
  });
  const changeMode = () => {
    console.log("isdark:", isDarkMode);
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home changeMode={changeMode} />} />
          <Route path="/Second" element={<SecondPage />} />
          <Route path="/Detail" element={<DetailCard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
