import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Home from "./pages/Home";
import schema from "./validation/formSchema";
import { createMemoryHistory } from "history";

const initialFormData = {
  name: "",
  size: "default",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]:
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    let order;
    evt.preventDefault();
    const newOrder = {
      name: formData.name,
      size: formData.size,
      topping1: formData.topping1,
      topping2: formData.topping2,
      topping3: formData.topping3,
      topping4: formData.topping4,
      special: formData.special,
    };

    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => setOrders([...orders, res.data]));
    console.log(orders);
    return order;
  };

  useEffect(() => {
    schema.validate(formData).catch((err) => setError(err.message));
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  return (
    <>
      <header>
        <h1>Bloomtech Eats</h1>
        <span className="header-buttons">
          <button>Home</button>
          <button>Help</button>
        </span>
      </header>
      <Switch>
        <Route exact path="/pizza">
          <>
            <Form
              formData={formData}
              change={handleChange}
              submit={handleSubmit}
              disabled={disabled}
              error={error}
            />
            {orders.map((item) => {
              return <pre key={item.id}>{JSON.stringify(item)}</pre>;
            })}
          </>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
