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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
            <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
            <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
            <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
       
      </div>
      
      
    );
  }
  
  export default Expenses;