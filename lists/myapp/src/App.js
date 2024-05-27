import ExpenseListUsingForLoop from './components/ExpenseListUsingForLoop';
import './App.css';

function App() {
   var expenses = [100, 200, 300]
   return (
      <div>
         <ExpenseListUsingForLoop expenses={expenses} />
      </div>
   );
}

export default App;
