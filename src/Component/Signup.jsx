import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    tandcond: false,
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    mobile: false,
    username: false,
    tandcond: false,
  });
  const navigate = useNavigate()
  function submitHandler(event) {
    event.preventDefault();
    const { name, email, mobile, username, termsAndConditions } = formData;
    setError({
      name: false,
      email: false,
      mobile: false,
      username: false,
      termsAndConditions: false,
    }); // reset error state
    if (name.trim().length === 0) {
      //
      setError((prevState) => {
        return { ...prevState, name: true };
      });
    }
    if (email.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    }
    if (mobile.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, mobile: true };
      });
    }
    if (username.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, username: true };
      });
    }
    if (termsAndConditions === false) {
      setError((prevState) => {
        return { ...prevState, termsAndConditions: true };
      });
    }
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/movies");
  }
  function changHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((predata) => {
      return {
        ...predata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="container">
      <div className="heading_signup">
        <h1>Super app</h1>
        <p>Create your new account</p>
      </div>
      <div className="form_data">
        <form className="form_field" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={changHandler}
          />
          {error.name && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Name is required
            </p>
          )}
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={changHandler}
          />
          {error.username && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Username is required
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changHandler}
          />
          {error.email && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Email is required
            </p>
          )}
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={changHandler}
          />
          {error.mobile && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Mobile is required
            </p>
          )}
          <input
            type="checkbox"
            className="check"
            name="tandcond"
            value={formData.tandcond}
          />
          <span className="check_box">
            Share my registration data with Superapp
          </span>
          <button type="submit" className="submit">
            SIGN UP
          </button>
          <p>
            By clicking on Sign up. you agree to Superapp
            <span> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
