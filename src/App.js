import React from 'react';
import './App.css';
import ExpList from './components/ExpList'
import AddList from './components/AddExp'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/add">
            <AddList />
          </Route>
          <Route path="/">
            <ExpList />
          </Route>
        </Switch>
      </div>
  </Router>
  </div>
  );
}

export default App;
