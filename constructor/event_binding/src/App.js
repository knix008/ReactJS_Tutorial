import React from 'react';
import Welcome from './Welcome'

function App() {
  return (
    <div className="container">
      <div style={{ padding: "10px" }}>
        <div>
          <Welcome name={'John'} />
        </div>
      </div>
    </div>
  );
}

export default App;
