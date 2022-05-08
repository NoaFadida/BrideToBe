import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import "./Menu.scss";

const MenuField = ({ icon }) => {
  return (
    <MenuItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText inset primary="My Details" />
    </MenuItem>
  );
};
export default MenuField;
