import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

// Google Analytics
if (process.env.NODE_ENV !== "dev") {
  ReactGA.initialize("G-B260N8XB5K");
  ReactGA.send("pageview");
} else {
  console.log("Google Analytics disabled"); // eslint-disable-line no-console
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
