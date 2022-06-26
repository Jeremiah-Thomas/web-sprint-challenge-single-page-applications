import React from "react";

const Form = (props) => {
  const { formData, change, submit, disabled } = props;
  return (
    <form id="pizza-form" onSubmit={submit}>
      <span className="divider">
        <h2>Build Your Own Pizza</h2>
      </span>
      <label>
        Name
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Name for the order"
          value={formData.name}
          onChange={change}
        />
      </label>
      <span className="divider">
        <h2>Choice of size</h2>
        <p>Required</p>
      </span>
      <select
        value={formData.size}
        id="size-dropdown"
        name="size"
        onChange={change}
      >
        <option value="default" disabled>
          -- Select a Size --
        </option>
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
      </select>
      <span className="divider">
        <h2>Add Toppings</h2>
      </span>
      <label>
        <input
          name="topping1"
          type="checkbox"
          checked={formData.topping1}
          onChange={change}
        />
        Pepperoni
      </label>
      <label>
        <input
          name="topping2"
          type="checkbox"
          checked={formData.topping2}
          onChange={change}
        />
        Chicken
      </label>
      <label>
        <input
          name="topping3"
          type="checkbox"
          checked={formData.topping3}
          onChange={change}
        />
        Bacon
      </label>
      <label>
        <input
          name="topping4"
          type="checkbox"
          checked={formData.topping4}
          onChange={change}
        />
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
        value={formData.special}
        onChange={change}
      />

      <input
        type="submit"
        id="order-button"
        disabled={disabled}
        value="Add to Order"
      />
    </form>
  );
};

export default Form;
