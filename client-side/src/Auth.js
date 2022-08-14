import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./UI/Header";
// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import Login from "./UI/Login";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import HomeScreen from "./HomeScreen";
import { UiContext } from "./DistributableContext";
// Screens

const Auth = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default Auth;
