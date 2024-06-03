import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleTable from './components/SimpleTable';

function App() {
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <SimpleTable />
        </div>
      </div>
    </div>
  );
}

export default App;

