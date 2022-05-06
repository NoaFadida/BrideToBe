import React from "react";
import RouterLink from "../common/RouterLink";
import "./Navbar.scss";
import { useHistory } from "react-router";


const Navbar = () => {
  const history = useHistory();
  let user = null;
  const ifUser = localStorage.getItem("user");
  if (ifUser) user = JSON.parse(ifUser);

  const signoutHandler = () => {
    localStorage.removeItem("user");
    history.push("/");
    window.location.reload(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-details">
        <div className="navbar-input">
          <input type="text" placeholder="search for dress..." />
        </div>
        <h2>Bride To Be</h2>
      </div>
      <div className="navbar-button">
        <ul>
          <RouterLink url="/" name="HOME" />
          {!user && (
            <>
              <RouterLink url="/login" name="SIGN IN" />
              <RouterLink url="/register" name="REGISTER" />
            </>
          )}
          {user && user?.isAdmin && (
            <>
              <RouterLink url="/admin" name="MY WORK" />
              <a onClick={signoutHandler}>SIGN OUT</a>
            </>
          )}
          {user && user?.isAdmin === false && (
            <>
              <RouterLink url="/personal" name="PERSONAL INFO" />
              <a onClick={signoutHandler}>SIGN OUT</a>
            </>
          )}
          <RouterLink url="/gallery" name="GALLERY" />
          <RouterLink url="/about" name="ABOUT US" />
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
