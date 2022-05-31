import React, { useRef, useState } from "react";
import Field from "../common/Field";
import axios from "axios";
import "./EditProfile.scss";

const EditProfile = () => {
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  const usernameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameRef.current.value.length < 3) {
      setErrorMessage("Please enter valid username.");
      return;
    }
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(emailRef.current.value)) {
      setErrorMessage("Please enter valid email address.");
      return;
    }
    if (phoneRef.current.value.length < 9) {
      setErrorMessage("Please enter valid phone number.");
      return;
    }

    const usernameUpper = usernameRef.current.value.toUpperCase();
    const userUpdate = {
      username: usernameUpper,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    };

    const updatedUser = { ...parseUser, ...userUpdate };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/update/${parseUser._id}`,
        updatedUser
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Saved!")
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <div className="edit-container">
      <h2>My Profile</h2>
      <div className="edit-container-field-wrapper">
        <form onSubmit={handleSubmit} className="edit-container-field">
          <Field ref={usernameRef} labelName="UserName" type="text" defaultValue={parseUser.username} />
          <Field ref={emailRef} labelName="Email" type="email" defaultValue={parseUser.email}/>
          <Field ref={phoneRef} labelName="Phone" type="number" defaultValue={parseUser.phone}/>
          {errorMessage && <div className="error"> {errorMessage} </div>}
          <div>
            <button type="submit">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
