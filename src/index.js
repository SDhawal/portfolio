import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import NavBar from './nav_bar';
import MainBody from './MainBody';
import reportWebVitals from './reportWebVitals';
import Project from './Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <NavBar />
    <MainBody/>
    <Project/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
