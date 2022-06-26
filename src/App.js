import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Home from "./pages/Home";
import schema from "./validation/formSchema";

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
      .then((res) => (order = { ...res.data }));

    return order;
  };

  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

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
          <>
            <Form
              formData={formData}
              change={handleChange}
              submit={handleSubmit}
              disabled={disabled}
            />
            {orders.map((order) => {
              return <pre key={order.id}>{JSON.stringify(order)}</pre>;
            })}
          </>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
