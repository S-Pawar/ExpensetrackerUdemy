import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
const Expenses = (props) => {
const [dropDownVal,SetDropDownVal]= useState('2022');
const DropDownFilter=(selectedVal)=>{

  SetDropDownVal(selectedVal);
  console.log(dropDownVal);
 
}

const filteredListYear = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === dropDownVal;
});
let expensesContent=<p style={{color: "white"}}>No Expenses</p>;
if(filteredListYear.length>0)
{
  expensesContent =
  filteredListYear.map(expense =>
   <ExpenseItem
   key={expense.id}
   title={expense.title}
   amount={expense.amount}
   date={expense.date}
 />
   )
}

    return (
      
        
      <div className="expenses">
         <ExpensesFilter onChangeDropDown={DropDownFilter}/>
     {expensesContent}
     
      </div>
      
    );
  }
  
  export default Expenses;