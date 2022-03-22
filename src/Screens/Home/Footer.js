import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-data">
        <div class="footer-nav">
          <ul class="footer-nav-list">
            <li>
              <a href="/">company</a>{" "}
            </li>
            <li>
              <a href="/">contact</a>{" "}
            </li>
            <li>
              <a href="/">carrers</a>{" "}
            </li>
            <li>
              <a href="/">privacy</a>{" "}
            </li>
            <li>
              <a href="/">terms</a>{" "}
            </li>
          </ul>
        </div>
        <div class="footer-info">&copy;copyright Neeraj Sharma 2022.</div>
      </div>
    </footer>
  );
};

export default Footer;
