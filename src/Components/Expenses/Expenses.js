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


    return (
      
        
      <div className="expenses">
         <ExpensesFilter onChangeDropDown={DropDownFilter}/>
         {props.items.map(expense =>
          <ExpenseItem
          key={expense.key}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
          )}
     
      </div>
      
    );
  }
  
  export default Expenses;