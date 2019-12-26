import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/home";
import Details from "./screens/detail"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
