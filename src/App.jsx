import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Router>
        <Background />
      </Router>
    </div>
  );
}

export default App;
