import React, {useState} from "react";
import "./index.css";

export default function App() {
  const [values, setvalue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <div className="form-container">
      <form className="register-form">
        <input
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          value={values.email}
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
