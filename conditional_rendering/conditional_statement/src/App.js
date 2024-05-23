import './App.css';

function Welcome(props) {
  let output = null;
  if (props.isLoggedIn) {
    output = <div>Welcome, {props.userName}</div>
  } else {
    output = <div><a href="/login">Login</a></div>
  }
  return output
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
