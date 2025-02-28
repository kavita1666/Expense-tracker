/* eslint-disable react/prop-types */
import "../App.css";
import { FormCategoryOptions } from "../helpers/CategoryFilterOptions";

export const ExpensesForm = ({ formData, setFormData }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="expense-form" onSubmit={handleOnSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Enter title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category">
          {FormCategoryOptions.map((category) => (
            <option key={category.value} value={category.value} hidden={category.hidden} onSelect={(e) => setFormData({ ...formData, category: e.target.value })}>
              {category.display}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" placeholder="Enter amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
