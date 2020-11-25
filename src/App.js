import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <div className="page-layout">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
