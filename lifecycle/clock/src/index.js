import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <div><p>Clock is removed from the DOM.</p></div>
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();