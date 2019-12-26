import React from "react";

import "./App.css";
import Home from "./screens/home";
import Detail from "./screens/detail";
import { BrowserRouter, Route } from "react-router-dom";


const App = () => {
  return (


    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />

    </BrowserRouter>
  );
};
export default App;
