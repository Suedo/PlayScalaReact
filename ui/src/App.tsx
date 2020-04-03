import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
