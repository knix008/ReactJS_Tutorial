import './App.css';

function Welcome(props) {
  return props.isLoggedIn ? <div>Welcome, {props.userName}</div> : null
}

function App() {
  return (
     <div className="container">
        <div style={{ padding: "10px" }}>
           <div>
              <div>Welcome component will not output any content</div>
                 <Welcome isLoggedIn={false} />
            </div>
          </div>
      </div>
  );
}

export default App;
