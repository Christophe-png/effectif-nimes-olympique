import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Effectif from "./components/Effectif";
import Articles from "./components/Articles";
import "./App.css";
//import { ReactComponent } from "*.svg";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://my-json-server.typicode.com/Christophe-png/effectif-nimes-olympique/db"
      );
      console.log(result.data[Object.keys(result.data)[0]]);
      setData(result.data[Object.keys(result.data)[0]]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Fragment>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.nom}</p>
              <p>{item.image}</p>
              <p>{item.age}</p>
              <p>{item.né}</p>
              <p>{item.poste}</p>
            </li>
          ))}
        </ul>
      </Fragment>

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
