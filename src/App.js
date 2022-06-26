import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Home from "./pages/Home";

const initialFormData = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
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
