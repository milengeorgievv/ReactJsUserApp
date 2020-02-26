import React, { useReducer } from "react";
import "./styles.css";
import { AuthContext } from "./AuthContext";
import { LoginScreen } from "./LoginScreen";
import { LoggedScreen } from "./LoggedScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function App() {
  const [authState, dispatch] = useReducer(reducer, { token: null });
  const { token } = authState;

  //{token !== null ? <LoggedScreen /> : <Redirect to="/loginscreen" />}
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      <Router>
        <Switch>
          <Route path="/loginscreen">
            {token !== null ? <Redirect to="/" /> : <LoginScreen />}
          </Route>
          <Route path="/">
            {token !== null ? <LoggedScreen /> : <Redirect to="/loginscreen" />}
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

function reducer(authState, action) {
  switch (action.type) {
    case "loggedOut":
      return { token: null };
    case "loggedIn":
      return { token: action.token };
    default:
      return authState;
  }
}
