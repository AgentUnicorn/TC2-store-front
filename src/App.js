import React from "react";
import "./App.css";
import ExpList from "./components/ExpList";
import AddList from "./components/AddExp";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Card2 from "./components/Card";
import CardList from "./components/CardList";
import FooterPage from "./components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/add">
              <AddList />
            </Route>
            <Route path="/">
            <NavBar />
        <Banner />
        <Categories />
        <CardList />
              <ExpList />
            
        <FooterPage />
            </Route>
          </Switch>
          
       
        </div>

      </Router>
    </div>
  );
}

export default App;
