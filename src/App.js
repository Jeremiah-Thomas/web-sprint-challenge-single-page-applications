import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <header>
        <h1>Bloomtech Eats</h1>
        <span className="header-buttons">
          <button>Home</button>
          <button>Help</button>
        </span>
      </header>

      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};
export default App;
