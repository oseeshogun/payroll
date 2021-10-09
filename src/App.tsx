import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';
import ListEmployees from './components/ListEmployees/ListEmployees';

function App() {

  const logged = localStorage.getItem("logged") ?? false;

  return (
    <Router>
      <Route path="/" exact component={!logged ? Login : DashBoard} />
      <Route path="/lists" exact component={!logged ? Login : ListEmployees} />
    </Router>
  );
}

export default App;
