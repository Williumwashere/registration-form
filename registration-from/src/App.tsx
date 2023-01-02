import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleFirstNameInput = (event: any) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = (event: any) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInput = (event: any) => {
    setValues({ ...values, lastName: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submit ? (
          <div className="success-message">Congratulations!</div>
        ) : null}
        <input
          value={values.firstName}
          onChange={handleFirstNameInput}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submit && !values.firstName ? (
          <span>Must enter First Name</span>
        ) : null}
        <input
          value={values.lastName}
          onChange={handleLastNameInput}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submit && !values.lastName ? <span>Must enter Last Name</span> : null}
        <input
          value={values.email}
          onChange={handleEmailInput}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !values.email ? <span>Must enter Email</span> : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
