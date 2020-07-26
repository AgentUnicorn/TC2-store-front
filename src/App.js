import React from 'react';
import './App.css';
import CarList from './components/CarList'
import AddList from './components/AddCar'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Video from './components/Video'
import Image from './components/Image'
import Footer from './components/Footer'
import CarDetail from './components/CarDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryParamProvider} from 'use-query-params'
import {CardGroup, Container, Row, Col, CardDeck} from 'react-bootstrap'



function App() {
  return (
    <div className="mainPage">
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
      <NavBar />
      <div className="App">
      
        <Switch>
          <Route path="/car/:id">
            <CarDetail />
          </Route>
          <Route path="/add">
            <AddList />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/">
            <Image />
              <div className="main">
                <Filter />
                <CarList />
              </div>  
          </Route>
        </Switch>
      </div>
      <Footer />
    </QueryParamProvider>
  </Router>
  </div>
  );
}

export default App;
