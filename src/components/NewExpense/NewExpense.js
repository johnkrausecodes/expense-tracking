import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [buttonPress, setOnPressed] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onPassExpenses(expenseData);
    setOnPressed(false);
  };

  const startEditingHandler = () => {
    setOnPressed(true);
  };

  const stopEditingHandler = () => {
    setOnPressed(false);
  };

  return (
    <div className="new-expense">
      {!buttonPress && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {buttonPress && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditingHandler={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
