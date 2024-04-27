import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItem from './components/ExpenseEntryItem'

const name = "Grape Juice"
const amount = 30.00
const spendDate = new Date("2020-10-10")
const category = "Food"

console.log(spendDate)

ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItem
            name={name}
            amount={amount}
            spendDate={spendDate}
            category={category} />
    </React.StrictMode>,
    document.getElementById('root')
)