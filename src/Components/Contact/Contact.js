import React, { Component } from "react";
import Form from "../Form/Form";

import globalClasses from "../../app.module.scss";

export default class Contact extends Component {
  render() {
    const inputs = [
      {
        type: "email",
        defaulValue: "",
        required: true,
        placeholder: "Email..."
      },
      {
        type: "text",
        required: true,
        defaulValue: "",
        placeholder: "Message..."
      }
    ];
    return (
      <div className={globalClasses.Container}>
        <Form
          method="Post"
          action="/contact/post"
          title="Contact"
          submitMessage="Send"
          fields={inputs}
        />
      </div>
    );
  }
}
