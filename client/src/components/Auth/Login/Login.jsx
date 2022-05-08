import React, { useRef } from "react";
import "../Auth.scss";
import axios from "axios";
import Field from "../../common/Field";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const logedUser = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      const { password, createdAt, updatedAt, __v, ...others } = logedUser.data;
      localStorage.setItem("user", JSON.stringify(others));
      history.push("/");
      window.location.reload(false);
    } catch (error) {
        alert(error.response.data);
    }
  };

  return (
    <div className="register-container">
      <h2>SignIn</h2>
      <div className="register-container-field-wrapper">
        <form onSubmit={handleSubmit} className="register-container-field">
          <Field ref={emailRef} labelName="Email" inputType="email" />
          <Field ref={passwordRef} labelName="Password" inputType="password" />
          <div>
            <button type="submit">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
