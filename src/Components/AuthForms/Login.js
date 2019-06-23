import React, { Component } from "react";
import Form from "../Form/Form";

import globalClasses from "../../app.module.scss";

export default class Login extends Component {
  render() {
    const fields = [
      {
        type: "email",
        label: "Email",
        name: "Email",
        required: true,
        defaultValue: "",
        placeholder: "Email ..."
      },
      {
        type: "password",
        label: "Password",
        name: "password",
        required: true,
        defaultValue: "",
        placeholder: "Password"
      }
    ];
    return (
      <div className={globalClasses.Container}>
        <Form
          title="Sign In"
          method="POST"
          action="/auth/signin"
          fields={fields}
          submitMessage="Log In"
        />
      </div>
    );
  }
}
