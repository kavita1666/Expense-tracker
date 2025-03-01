import { useState } from "react";
import "./App.css";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpenseTable } from "./components/ExpenseTable";
import { ContextMenu } from "./components/ContextMenu";
import { ExpenseData } from "./helpers/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState("");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm setExpenses={setExpenses} setFormData={setFormData} formData={formData} setEditingRowId={setEditingRowId} editingRowId={editingRowId} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setFormData={setFormData} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
