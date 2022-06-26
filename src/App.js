import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
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
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
