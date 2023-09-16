import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
const NewExpense = (props) => {
  function onCancelClick() {
    SetAddButtonDivVisibility(true);
  }
  function onSaveExpenseData(enteredExpense) {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  const [addButtonDivVisibility, SetAddButtonDivVisibility] = useState(true);
  return (
    <div className="new-expense">
      {addButtonDivVisibility ? (
        <div id="addNewButtonDiv">
          <button
            onClick={() => SetAddButtonDivVisibility(!addButtonDivVisibility)}
          >
            Add new Expense
          </button>
        </div>
      ) : null}
      {!addButtonDivVisibility ? (
        <ExpenseForm
          onSaveExpenseDate={onSaveExpenseData}
          onCancelClick={onCancelClick}
        />
      ) : null}
    </div>
  );
};

export default NewExpense;
