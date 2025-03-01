/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import { FormCategoryOptions } from "../helpers/CategoryFilterOptions";
import { validationConfig } from "../helpers/validationConfig";

export const ExpensesForm = ({ setExpenses }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const checkValidation = () => {
    let tempErrors = {};
    Object.keys(validationConfig).forEach((key) => {
      validationConfig[key].forEach((rule) => {
        if ((rule.required && formData[key].trim().length === 0) || formData[key].length < rule.minLength || formData[key].length > rule.maxLength || formData[key] < rule.min || formData[key] > rule.max) {
          tempErrors[key] = rule.message;
        }
      });
    });
    setErrors(tempErrors)
    return tempErrors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // check validation
    const err = checkValidation();
    console.log("----error", err);
    if (Object.keys(err).length > 0) return;

    setExpenses((prevExpenses) => [...prevExpenses, { ...formData, id: crypto.randomUUID() }]);

    setFormData({
      title: "",
      category: "",
      amount: "",
    });
    setErrors({});
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="expense-form" onSubmit={handleOnSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Enter title" value={formData.title} onChange={(e) => handleOnChange(e)} />
        <p className="error-message">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" value={formData.category} name="category" onChange={(e) => handleOnChange(e)}>
          {FormCategoryOptions.map((category) => (
            <option key={category.value} value={category.value} hidden={category.hidden}>
              {category.display}
            </option>
          ))}
        </select>
        <p className="error-message">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" value={formData.amount} onChange={(e) => handleOnChange(e)} />
        <p className="error-message">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
