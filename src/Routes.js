import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Component/Navigation";

import Home from "./Pages/Home";
import Beerlist from "./Pages/Beerlist";

// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beerlist" component={Beerlist} />
      </Switch>
    </Router>
  );
};

export default Routes;
