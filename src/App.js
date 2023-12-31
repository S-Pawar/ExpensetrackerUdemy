import "./styles.css";

import Expenses from "./Components/Expenses/Expenses.js";
import NewExpense from "./Components/Expenses/NewExpense.js";
import {useState} from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

export default function App() {
 
 const [expenseData,setExpensesData] = useState(expenses);
 const addExpenseHandler = (expense) => {
  console.log(expense);
  setExpensesData((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenseData} />
    </div>
  );

}
