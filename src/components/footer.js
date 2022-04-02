import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div id="footer" class="container invert">
      <footer class="footer">
        <div class="footer__links">
          <h4>Connect with Us</h4>
          <ul class="">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Exercitationem.</a>
            </li>
            <li>
              <a href="">Officiis.</a>
            </li>
          </ul>
        </div>
        <div class="footer__links">
          <h4>Links</h4>
          <ul class="">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Exercitationem.</a>
            </li>
            <li>
              <a href="">Officiis.</a>
            </li>
          </ul>
        </div>
        <div class="footer__links">
          <h4>RAF Air Cadets</h4>
          <ul class="">
            <li>
              <a class="icon-twitter" href="">
                Twitter
              </a>
            </li>
            <li>
              <a class="icon-facebook" href="">
                Facebook.
              </a>
            </li>
            <li>
              <a class="icon-website" href="">
                Website
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__copyright">
          <p>Copyright blah blah blah 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
