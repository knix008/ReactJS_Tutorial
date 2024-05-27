import React from 'react'

class ExpenseListUsingForLoop extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         expenses: this.props['expenses']
      }
      this.remove = this.remove.bind(this)
   }

   remove() {
      var itemToRemove = this.state['expenses'][0]
      this.setState((previousState) => ({
         expenses: previousState['expenses'].filter((item) => item !== itemToRemove)
      }))
   }

   getTotalExpenses() {
      var items = this.props['expenses'];
      var total = 0;
      for (let i = 0; i < items.length; i++) {
         total += parseInt(items[i]);
      }
      return total;
   }

   render() {
      var items = this.state['expenses'];
      var expenses = []
      expenses = items.map((item, idx) => <tr key={idx}><td>item {idx + 1}</td><td>{item} <input /></td></tr>)
      var total = this.getTotalExpenses();
      return (
         <div>
            <table>
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
            <div>
               <button onClick={this.remove}>Remove first item</button>
            </div>
         </div>
      )
   }
}

export default ExpenseListUsingForLoop