import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");
  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          year={enteredYear}
          yearChangeHandler={yearChangeHandler}
        />
        <ExpensesList items = {filteredExpenses} />
        {/* {filteredExpenses.length === 0 ? ( This is a ternary JS that could be used instead of the if statement
          <p>No Expenses found.</p>
        ) : (
          filteredExpenses.map((filteredExpenses) => (
            <ExpenseItem
              key={filteredExpenses.id}
              title={filteredExpenses.title}
              amount={filteredExpenses.amount}
              date={filteredExpenses.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
