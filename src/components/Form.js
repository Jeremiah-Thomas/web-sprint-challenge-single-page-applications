import React from "react";

const Form = () => {
  return (
    <form id="pizza-form">
      <h2>Build Your Own Pizza</h2>
      <label>
        Name
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Name for the order"
        />
      </label>
      <span className="divider">
        <h2>Choice of size</h2>
        <p>Required</p>
      </span>
      <select name="size">
        <option default disabled>
          -- Select a Size --
        </option>
        <option>Large</option>
        <option>Medium</option>
        <option>Small</option>
      </select>
      <span className="divider">
        <h2>Add Toppings</h2>
      </span>
      <label>
        <input name="topping1" type="checkbox" />
        Pepperoni
      </label>
      <label>
        <input name="topping2" type="checkbox" />
        Chicken
      </label>
      <label>
        <input name="topping3" type="checkbox" />
        Bacon
      </label>
      <label>
        <input name="topping4" type="checkbox" />
        Olives
      </label>
      <span className="divider">
        <h2>Special Instructions</h2>
      </span>
      <input
        id="special-text"
        name="special"
        type="text"
        placeholder="Instructions"
      />

      <input type="submit" id="order-button" value="Add to Order" />
    </form>
  );
};

export default Form;
