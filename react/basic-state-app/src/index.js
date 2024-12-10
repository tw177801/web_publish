import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppAirbnb from './components/airbnb/AppAirbnb';
// import AppAvatar from './components/avatar/AppAvatar.jsx';
// import reportWebVitals from './reportWebVitals';
// import AppCounter from './components/counter/AppCounter.jsx';
import AppBestSeller from './components/yes24/AppBestSeller.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBestSeller />
    {/* <AppAvatar /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
