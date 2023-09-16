import "./ExpenseForm.css"
import {useState} from 'react';
const ExpenseForm = (props) => {

const [titleValue,SetTitleValue] = useState("");
const [amountValue,SetamountValue] = useState("");
const [dateValue,SetdateValue] = useState("");
const [addButtonVisibility,SetAddButtonVisibility] = useState(true);

function TitleHandler(event){
    SetTitleValue(event.target.value);
   
}
function AmountHandler(event){
    SetamountValue(event.target.value);
}
function DateHandler(event){
    SetdateValue(event.target.value);
}

function onSubmitHandler(event){
    event.preventDefault();
    const expenseData={
        title: titleValue,
        amount: +amountValue,
        date:new Date(dateValue),

    }



    SetTitleValue('');
    SetamountValue('');
    SetdateValue('');
   
    props.onSaveExpenseDate(expenseData);
    SetAddButtonVisibility(!addButtonVisibility);
}

return (
    <form onSubmit={onSubmitHandler}>
        {addButtonVisibility ? 
         <div id="addNewButtonDiv">
            <button onClick={()=>SetAddButtonVisibility(!addButtonVisibility) }> Add new Expense </button>
        </div>
        : null}
        {!addButtonVisibility ?  
  <div id="formBody">        
<div className='new-expense__controls'>
<div className='new-expense__control'>
<label> Title </label> 
    <input type='text' value={titleValue} onChange={TitleHandler} /> 

</div> 
<div className='new-expense__control'>
<label> Amount </label> 
    <input type='text' min="0.01" step="0.01"  value={amountValue} onChange={AmountHandler}/> 

</div> 
<div className='new-expense__control'>
<label> Date </label> 
    <input type='date'   min='2019-01-01' max='2025-12-31' value={dateValue} onChange={DateHandler}/> 

</div> 
</div>
  <div className='new-expense__actions'>
        <button  type='submit'>Add Expense</button>
        <button onClick={()=>SetAddButtonVisibility(!addButtonVisibility) }>Cancel</button>
      </div>

 </div>

      : null  }
   

 </form>
);
}

export default ExpenseForm;