import ExpenseListUsingForLoop from './components/ExpenseListUsingForLoop';
import './App.css';

function App() {
   var expenses = [
      {
         id: 1,
         amount: 100
      },
      {
         id: 2,
         amount: 200
      },
      {
         id: 3,
         amount: 300
      }
   ]
   return (
      <div>
         <ExpenseListUsingForLoop expenses={expenses} />
      </div>
   );
}

export default App;
