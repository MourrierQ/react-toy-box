import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../app.module.scss";
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
    console.log(this.props.logo);
    return (
      <div className={[classes.Navbar, classes.Top].join(" ")}>
        <div className={classes.container}>
          <div className={classes.Logo}>
            <Link to="/">
              <img src={this.props.logo} alt="logo" />
            </Link>
          </div>
          <ul>{navLinks}</ul>
        </div>
      </div>
    );
  }
}
