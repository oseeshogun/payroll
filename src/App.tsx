import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';

function App() {

  const logged = localStorage.getItem("logged") ?? false;

  return (
    <Router>
      <Route path="/" component={!logged ? Login : DashBoard} />
      <Route path="/dashboard" component={DashBoard} />
    </Router>
  );
}

export default App;
