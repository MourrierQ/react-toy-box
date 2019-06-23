import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navigation/Navbar";

import logo from "./logo.svg";

import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import SigninForm from "./Components/AuthForms/Signin";
import LoginForm from "./Components/AuthForms/Login";

import classes from "./app.module.scss";

function App() {
  // Create your links here
  const navLinks = [
    {
      name: "About",
      path: "/about",
      component: About
    },
    {
      name: "Contact",
      path: "/contact",
      component: Contact
    },
    {
      name: "Sign in",
      path: "/auth/signin",
      component: SigninForm
    },
    {
      name: "Log in",
      path: "/auth/login",
      component: LoginForm
    }
  ];

  const Routes = navLinks.map((link, key) => (
    <Route key={key} path={link.path} component={link.component} />
  ));
  return (
    <div className={classes.Classic}>
      <Navbar logo={logo} navLinks={navLinks} />
      <Switch>
        <Route exact path="/" component={Home} />
        {Routes}
      </Switch>
    </div>
  );
}

export default App;
