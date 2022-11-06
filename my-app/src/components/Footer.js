import React from 'react';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
              </div>
              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Blog</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
                <FacebookIcon className="mx-3" size={36}/>
                <LinkedinIcon className="mx-3" size={36}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;