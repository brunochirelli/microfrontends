import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "../components/Signin";
import SignUp from "../components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn, onSignUp }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignUp={onSignUp} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
