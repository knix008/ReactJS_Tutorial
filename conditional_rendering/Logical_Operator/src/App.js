import './App.css';

function Welcome(props) {
  if (props.isLoggedIn) {
    return props.isLoggedIn ?
      <div>Welcome, {props.userName}</div> : <div><a href="/login">Login</a></div>
  }
}

function App() {
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <Welcome isLoggedIn={true} userName={'John'} />
        </div>
      </div>
    </div>
  );
}

export default App;
