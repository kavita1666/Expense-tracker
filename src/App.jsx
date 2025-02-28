import { useEffect, useState } from "react";
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

  function addExpenses() {
    if(formData){
      setExpenses({
        ...expenses,
        formData
      })
      console.log(formData)
    }
    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  }

  useEffect(() => {
    addExpenses();
  }, [formData.title, formData.category, formData.amount]);

  console.log(expenses);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm formData={formData} setFormData={setFormData} />
        <ExpenseTable expenses={expenses} />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
