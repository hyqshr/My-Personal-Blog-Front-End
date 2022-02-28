import React from "react";
import "./styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Create by <span>Yiqiu Huang </span> | Copyright ⓒ {year} All rights
        reserved. | huang.yiqiu@northeastern.edu
      </p>
    </footer>
  );
}

export default Footer;
