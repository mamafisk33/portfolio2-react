import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/home">Classes</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/ironandmortar/"
              target="_blank"
              rel="noreferrer noopener">
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/ironandmortar"
              target="_blank"
              rel="noreferrer noopener">
              <i className="fa fa-facebook" />
            </a>{" "}
            <br />
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="https://www.mapquest.com/us/washington/business-yakima/iron-mortar-422095670"
              target="_blank"
              rel="noreferrer noopener">
              <i className="fa fa-globe" /> Map
            </a>
          </div>
          <div className="col-sm-4 text-left">
            <a role="button" className="btn btn-link" href="tel:+12069481553">
              <i className="fa fa-phone" /> 1-206-948-1553
            </a>
            <br />
            <a role="button" className="btn btn-link" href="mailto:info@ironandmortar.com">
              <i className="fa fa-envelope-o" /> info@ironandmortar.com
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="http://ashleyloyer.com/"
              target="_blank"
              rel="noreferrer noopener">
              <i className="fa fa-image" /> Ashley Loyer Photography
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
