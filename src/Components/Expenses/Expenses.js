import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart"
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


    return (
      
        
      <div className="expenses">
         <ExpensesFilter onChangeDropDown={DropDownFilter}/>
          <ExpensesChart expenses={filteredListYear} />
     <ExpensesList items={filteredListYear} />
     
      </div>
      
    );
  }
  
  export default Expenses;