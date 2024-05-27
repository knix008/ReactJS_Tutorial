import React from 'react'

class ExpenseListUsingForLoop extends React.Component {
   getTotalExpenses() {
      var items = this.props['expenses'];
      var total = 0;
      for (let i = 0; i < items.length; i++) {
         total += parseInt(items[i]);
      }
      return total;
   }

   render() {
      var items = this.props['expenses'];
      var expenses = []
      expenses = items.map(
         (item, idx) => <tr key={idx}><td>item {idx + 1}</td><td>{item}</td></tr>)
      var total = this.getTotalExpenses();
      return <table>
         <thead>
            <tr>
               <th>Item</th>
               <th>Amount</th>
            </tr>
         </thead>
         <tbody>
            {expenses}
         </tbody>
         <tfoot>
            <tr>
               <th>Sum</th>
               <th>{total}</th>
            </tr>
         </tfoot>
      </table>
   }
}

export default ExpenseListUsingForLoop