import React from "react";
import "./App.css";

import Navbar from "./modules/Navbar/Navbar";
import Body from "./modules/Body/Body"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
