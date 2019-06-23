import React, { Component } from "react";
import Form from "../Form/Form";

import globalClasses from "../../app.module.scss";

export default class Signin extends Component {
  render() {
    const fields = [
      {
        type: "text",
        label: "Username",
        required: true,
        defaultValue: "",
        placeholder: "Username ..."
      },
      {
        type: "email",
        label: "Email",
        required: true,
        defaultValue: "",
        placeholder: "Email ..."
      },
      {
        type: "password",
        label: "Password",
        required: true,
        defaultValue: "",
        placeholder: "Password"
      },
      {
        type: "password",
        label: "Confirm password",
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
          submitMessage="Sign In"
        />
      </div>
    );
  }
}
