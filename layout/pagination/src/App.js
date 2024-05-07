import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SimplePagination from './SimplePagination'

function App() {
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <SimplePagination />
        </div>
      </div>
    </div>
  );
}

export default App;
