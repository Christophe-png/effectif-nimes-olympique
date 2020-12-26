import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Effectif from "./components/Effectif";
import Articles from "./components/Articles";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Fragment>"Hello world</Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/effectif" component={Effectif} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
