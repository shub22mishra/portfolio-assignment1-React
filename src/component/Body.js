import React from "react";
import "./index.css";

export default class Body extends React.Component {
  render() {
    return (
      <div className="">
        <div className="banner-text">
          <h1>Web Developer</h1>

          <p>
                Curious to learn more about new technologies. 
                Being a  Web Developer, I have ability to
                create innovative, creative and
                interactive web pages.</p>
          <p>
            HTML/CSS | Bootstrap | JavaScript | React | Django | NodeJS |
            Express | Mysql
          </p>
          <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}
