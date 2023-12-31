import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [titleValue, SetTitleValue] = useState("");
  const [amountValue, SetamountValue] = useState("");
  const [dateValue, SetdateValue] = useState("");

  function TitleHandler(event) {
    SetTitleValue(event.target.value);
  }
  function AmountHandler(event) {
    SetamountValue(event.target.value);
  }
  function DateHandler(event) {
    SetdateValue(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const expenseData={
        title: titleValue,
        amount: +amountValue,
        date:new Date(dateValue),

    }



    SetTitleValue("");
    SetamountValue("");
    SetdateValue("");

    props.onSaveExpenseDate(expenseData);
    props.onCancelClick();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div id="formBody">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label> Title </label>
            <input type="text" value={titleValue} onChange={TitleHandler} />
          </div>
          <div className="new-expense__control">
            <label> Amount </label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              value={amountValue}
              onChange={AmountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label> Date </label>
            <input
              type="date"
              min="2019-01-01"
              max="2025-12-31"
              value={dateValue}
              onChange={DateHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onCancelClick}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
