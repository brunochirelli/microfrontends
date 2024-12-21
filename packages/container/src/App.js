import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={MarketingApp} />
    </BrowserRouter>
  );
};

export default App;
