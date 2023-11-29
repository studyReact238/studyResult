import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchAppBar from './components/AppBar';
import reportWebVitals from './reportWebVitals';

const appBar = ReactDOM.createRoot(
  document.getElementById('appBar') as HTMLElement
);
appBar.render(
  <React.StrictMode>
    <SearchAppBar />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
