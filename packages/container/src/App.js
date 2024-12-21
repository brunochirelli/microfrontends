import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={MarketingApp} />
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
