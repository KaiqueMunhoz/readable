import React from "react";
import FooterItems from "../FooterItems";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="pure-menu pure-menu-horizontal">
        <FooterItems />
      </div>
    </div>
  );
};

export default Footer;
