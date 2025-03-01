import { useState } from "react";
import "./App.css";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpenseTable } from "./components/ExpenseTable";
import { ContextMenu } from "./components/ContextMenu";
import { ExpenseData } from "./helpers/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);

  // console.log(expenses);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
