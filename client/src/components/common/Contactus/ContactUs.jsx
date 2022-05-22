import React from "react";
import { IconButton } from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";
import './ContactUs.scss';

const ContactUs = () => {

  return (
    <IconButton
      className="root"
      rel="noopener noreferrer"
      target="_blank"
      href="mailto:noafadida122@gmail.com"
    >
      <EmailOutlined fontSize="large" />
    </IconButton>
  );
};

export default ContactUs;