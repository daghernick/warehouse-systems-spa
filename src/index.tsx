import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Nav/Nav';
import Events from './Events/Events';
import Merch from './Merch/merch';
import MerchDetails from './Merch/MerchDetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path="/"> 
          <Navigation/> 
          <Home />
        </Route>
        <Route exact path="/events"> 
          <Navigation/> 
          <Events/>
        </Route>
        <Route exact path="/merch"> 
          <Navigation/> 
          <Merch/>
        </Route>
        <Route path="/merch/:id">
         <MerchDetails></MerchDetails>
        </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
