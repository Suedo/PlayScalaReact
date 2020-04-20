import React, { useState } from "react";
import "./App.css";

import Navbar from "./modules/Navbar/Navbar";
import Body from "./modules/Body/Body";
import { Paper } from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, amber } from "@material-ui/core/colors";

const App: React.FC = () => {
  const [darkmode, setDarkmode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
      primary: {
        // light: "#e0f2f1",
        main: "#16817a",
        dark: "#024249", // dark will be calculated based on main
        // contrastText: "#abfff9", // cant really give a good value
      },
      secondary: {
        light: "#f79071",
        main: "#fa744f",
        contrastText: "#6b1800",
      },
    },
  });

  const themeChange = () => {
    setDarkmode((darkmode) => !darkmode);
    console.log("darkmode: " + darkmode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <div className="App">
          <Navbar themeChange={themeChange} darkmode={darkmode} />
          <Body />
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
