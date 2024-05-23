import './App.css';
import ShowUsers from './ShowUsers';

function App() {
  const users = ['John', 'Peter']
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <ShowUsers users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
