import './App.css'
import React from 'react';
import UserInput from './Flux/UserInput';
import UserList from './Flux/UserList';

function App() {
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <UserInput />
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;

