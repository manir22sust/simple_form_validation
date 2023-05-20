import React, { useState, useEffect } from "react";
import "./Form.css"; // Import the CSS file

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [name, email, password]);

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    // Validate email
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // Validate password
    if (password.trim() === "") {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters long";
    }

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    // Check if there are no errors
    if (Object.keys(errors).length === 0) {
      // Submit the form or perform further actions
      console.log("Form submitted");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name" className="input-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className={`input-field ${errors.name ? "input-error" : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="input-container">
        <label htmlFor="email" className="input-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={`input-field ${errors.email ? "input-error" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="input-container">
        <label htmlFor="password" className="input-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={`input-field ${errors.password ? "input-error" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
