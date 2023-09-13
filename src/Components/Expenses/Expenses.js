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

const filteredYear = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === dropDownVal;
});

    return (
      
        
      <div className="expenses">
         <ExpensesFilter onChangeDropDown={DropDownFilter}/>
         {
         filteredYear.map(expense =>
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
          )}
     
      </div>
      
    );
  }
  
  export default Expenses;