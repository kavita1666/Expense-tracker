/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../App.css";
import { FilterTableCategoryOptions } from "../helpers/CategoryFilterOptions";
import { ContextMenu } from "./ContextMenu";

export const ExpenseTable = ({ expenses, setExpenses, setFormData, editingRowId, setEditingRowId }) => {
  const [filteredData, setFilteredData] = useState(expenses);
  const [filterCategory, setFilterCategory] = useState("all");
  const [contextMenuPosition, setContextMenuPosition] = useState({});
  

  const getTotalAmount = () => {
    return filteredData.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
  };

  const getFilteredCategory = () => {
    const newData = expenses.filter((expense) => {
      if (filterCategory.toLowerCase() === "all") {
        return true;
      } else {
        return expense.category.toLowerCase() === filterCategory.toLowerCase();
      }
    });
    setFilteredData(newData);
  };

  useEffect(() => {
    getFilteredCategory();
  }, [filterCategory, expenses]);

  const handleSortAscending = () => {
    const sortedData = [...filteredData].sort((a, b) => a.amount - b.amount);
    setFilteredData(sortedData);
  };

  const handleSortDescending = () => {
    const sortedData = [...filteredData].sort((a, b) => b.amount - a.amount);
    setFilteredData(sortedData);
  };

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setContextMenuPosition({ left: e.clientX, top: e.clientY });
    setEditingRowId(id);
  };

  const handleDeleteExpense = () => {
    const newData = filteredData.filter((expense) => expense.id !== editingRowId);
    setFilteredData(newData);
    setExpenses(newData);
  };

  const handleEditExpense = () => {
    const rowData = filteredData.find((expense) => expense.id === editingRowId);
    setFormData({
      title: rowData.title,
      category: rowData.category,
      amount: rowData.amount,
    });
  };

  return (
    <>
      <ContextMenu contextMenuPosition={contextMenuPosition} setContextMenuPosition={setContextMenuPosition} handleDeleteExpense={handleDeleteExpense} handleEditExpense={handleEditExpense} />
      <table className="expense-table" onClick={() => setContextMenuPosition({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                {FilterTableCategoryOptions.map((category) => (
                  <option key={category.value}>{category.display}</option>
                ))}
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <button onClick={handleSortAscending} style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 384 512" className="arrow up-arrow">
                    <title>Ascending</title>
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                </button>

                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 384 512" className="arrow down-arrow" onClick={handleSortDescending}>
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((expense) => (
            <tr key={expense.id} onContextMenu={(e) => handleContextMenu(e, expense.id)}>
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹ {expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹ {getTotalAmount()}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};
