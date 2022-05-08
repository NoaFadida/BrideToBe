import React, { useRef } from "react";
import "../Auth.scss";
import axios from "axios";
import Field from "../../common/Field";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const usernameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameUpper = usernameRef.current.value.toUpperCase();

    const user = {
      username: usernameUpper,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("http://localhost:5000/api/auth/register", user);
      history.push("/login");
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="register-container-field-wrapper">
        <form onSubmit={handleSubmit} className="register-container-field">
          <Field ref={usernameRef} labelName="Full Name" />
          <Field ref={phoneRef} labelName="Phone" type="number" />
          <Field ref={emailRef} labelName="Email" type="email" />
          <Field ref={passwordRef} labelName="Password" type="password" />
          <div>
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
