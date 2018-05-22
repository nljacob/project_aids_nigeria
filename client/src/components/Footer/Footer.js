import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
// import { Link } from "react-router-dom";
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
import "./Footer.css";

const Footer = () => (
  <footer className="footer fixed-bottom">
  <div className="container text-center">
  <div className="footerdisplay">
   <a href="https://www.facebook.com/Project-AIDS-Nigeria-584003581641320/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f footericons"></i>
    </a> &nbsp;
    <a href="https://twitter.com/AIDSnigeria1?lang=en" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter footericons"></i>
    </a>&nbsp;
    <a href="https://plus.google.com/u/0/100272089643330137361" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-google-plus-g footericons"></i>
    </a>
    <a href="/contact">
      <i className="fas fa-envelope footericons"></i>
    </a>    
  </div>
  </div>
  </footer>
);

<<<<<<< HEAD

<Link to="/login" className="nav-link">
          <i className="fas fa-user accountlogo" title="Log In/Sign Up"></i>
          </Link>

=======
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
export default Footer;
