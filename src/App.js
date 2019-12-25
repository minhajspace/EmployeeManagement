import React from "react";
import data from "./data.json";
import "./App.css";
import Home from "./screens/home";
import Detail from "./screens/detail";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exect component={Home} />
        <Link to="/"></Link>
        <Route path="/Detail" component={Detail} />
      </div>
    </BrowserRouter>
  );
};
export default App;
