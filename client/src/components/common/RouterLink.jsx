import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const RouterLink = ({ url, name }) => {
  const history = useHistory();

  const toUrl = () => {
    history.push(url);
    window.location.reload(false);
  };

  return (
    <Link to={url} onClick={toUrl} style={{ textDecoration: "none" }}>
      {name}
    </Link>
  );
};

export default RouterLink;
