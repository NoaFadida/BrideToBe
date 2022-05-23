import React, { useRef } from "react";
import Field from "../common/Field";
import axios from "axios";
import './EditProfile.scss';

const EditProfile = () => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    const usernameRef = useRef();
    // const phoneRef = useRef();
    // const emailRef = useRef();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        const usernameUpper = usernameRef.current.value.toUpperCase();
        const userUpdate = {
            username: usernameUpper,
            // phone: phoneRef.current.value,
            
        };
        const updatedUser = {...parseUser, ...userUpdate}
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/update/${parseUser._id}`, updatedUser);
            localStorage.setItem('user', JSON.stringify(res.data))
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
          <Field ref={usernameRef} labelName="UserName" />
          {/* <Field ref={emailRef} labelName="Email" type="email" /> */}
          {/* <Field ref={phoneRef} labelName="Phone" type="number" />  */}
          <div>
            <button type="submit">Save</button>
            <button type="submit">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;