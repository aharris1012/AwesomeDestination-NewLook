import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navigation from "./components/Navigation"

import './App.css';

function App() {
  return (
    <>
    <Router>
    <Navigation/>
    <Switch>
      <Route exact path= "/">
      </Route>
    </Switch>
    </Router>
      
      
   
    </>
  );
}

export default App;
