import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.scss";

export default class Navbar extends Component {
  state = {
    isLogged: false
  };
  render() {
    const navLinks = this.props.navLinks.map((link, key) => (
      <li key={key}>
        <Link to={link.path}>{link.name}</Link>
      </li>
    ));
    return (
      <div className={classes.Navbar}>
        <div className={classes.container}>
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <ul>{navLinks}</ul>
        </div>
      </div>
    );
  }
}
