import React, { Component } from "react";
import classes from "./form.module.scss";

export default class Form extends Component {
  // ======================== Render ===================================================================

  render() {
    const inputs = this.generateInputs(this.generateInputTypes());
    return (
      <div className={classes.genericForm}>
        <h1>{this.props.title}</h1>
        <form method={this.props.method} action={this.props.action}>
          {inputs}
          <input type="Submit" value={this.props.submitMessage || "Submit"} />
        </form>
      </div>
    );
  }

  // ========================== Dynamic input generation methods =======================================

  generateTextInput = (field, key) => {
    if (field.label) {
      return (
        <div key={key} className={classes.InputGroup}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="text"
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    return (
      <input
        key={key}
        type="text"
        name={field.name}
        required={field.required}
        placeholder={field.placeholder}
      />
    );
  };

  generateEmailInput = (field, key) => {
    if (field.label) {
      return (
        <div key={key} className={classes.InputGroup}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="email"
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    return (
      <input
        key={key}
        type="email"
        name={field.name}
        required={field.required}
        placeholder={field.placeholder}
      />
    );
  };

  generatePasswordInput = (field, key) => {
    if (field.label) {
      return (
        <div key={key} className={classes.InputGroup}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="password"
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    return (
      <input
        key={key}
        type="password"
        name={field.name}
        required={field.required}
        placeholder={field.placeholder}
      />
    );
  };

  generateInputTypes = () => {
    return {
      text: this.generateTextInput,
      email: this.generateEmailInput,
      password: this.generatePasswordInput
    };
  };

  generateInputs = inputTypes => {
    return this.props.fields.map((field, key) =>
      inputTypes[field.type](field, key)
    );
  };
}
