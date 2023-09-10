import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.js"
const NewExpense = (props) => {
function onSaveExpenseData(enteredExpense){
const expenseData = {
    ...enteredExpense,
    id:Math.random().toString()
}
props.onAddExpense(expenseData);

}
return (
<div className="new-expense">
<ExpenseForm onSaveExpenseDate={onSaveExpenseData}/>
</div>
);
}

export default NewExpense;