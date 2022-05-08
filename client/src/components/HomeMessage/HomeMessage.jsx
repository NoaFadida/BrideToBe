import React from "react";
import "./HomeMessage.scss";
import RouterLink from "../common/RouterLink";

const HomeMessage = () => {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  return (
    <div className="home-message">
      <h2>BRIDAL COUTURE</h2>
      <p>
        Our couture bridal gowns are known for their romantic and sensual nature
        and exquisite details, along with their figure-flattering silhouettes
        and emphasis oncomfort. SignIn and make an appointment this month and
        get a 10 percent discount from us!
      </p>
      {!parsedUser && (
        <div className="home-message-links">
          <RouterLink name="Click here to SignIn" url="/login" />
          <RouterLink name="Click here to register" url="/register" />
        </div>
      )}
    </div>
  );
};

export default HomeMessage;
