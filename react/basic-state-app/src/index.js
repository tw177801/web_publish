import React from 'react';
import ReactDOM from 'react-dom/client';
// import Routes from "./Routes";

import './index.css';
// import AppRouter2 from './components/router2/AppRouter2.jsx';
// import AppRouter from './components/router/AppRouter';
// import App from './App';
// import AppAirbnb from './components/airbnb/AppAirbnb';
// import AppAvatar from './components/avatar/AppAvatar.jsx';
// import reportWebVitals from './reportWebVitals';
// import AppCounter from './components/counter/AppCounter.jsx';
// import AppBestSellerRouter from './components/yes24_router/AppBestSellerRouter.jsx';
// import AppOlive from './components/olive/AppOlive.jsx';
// import AppCounter2 from './components/counter2/AppCounter2.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppForm from './components/form/AppForm.jsx';
import Index2 from './components/Portfolio2/Index2.jsx';

// ReactDOM.render(<Routes />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppRouter2 /> */}
    <Index2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
