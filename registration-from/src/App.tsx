import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInput = (event:any) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = (event:any) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInput = (event:any) => {
    setValues({...values, lastName: event.target.value})
  }

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          value={values.firstName}
          onChange={handleFirstNameInput}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          value={values.lastName}
          onChange={handleLastNameInput}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          value={values.email}
          onChange={handleEmailInput}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
