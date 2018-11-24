import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Component-home">
        <div className="landing-splash">
        <h1>SHAUNCARLAND</h1>
          <h2>... is a software engineer in New York City</h2>
          <h3>
          <a href="mailto:shauncarland@gmail.com">Contact</a> &nbsp; &nbsp;
          <a href="https://drive.google.com/file/d/1Y6xF9PXp6iQzWRCPJ6emYdxEjX6rh5Pn/view?usp=sharing">Resume</a> &nbsp; &nbsp;
          <a href="https://calendly.com/shauncarland">Book A Meeting</a>
          </h3>

          <div className="contact-icons-container">
            <a href="https://www.instagram.com/shauncarland/" target="_blank">
              <img className="contact-icon" src="http://icons-for-free.com/free-icons/png/512/1620006.png"/>
            </a>

            <a href="https://www.linkedin.com/in/shauncarland/" target="_blank">
              <img className="contact-icon" src="https://image.freepik.com/free-icon/linkedin-logo-ios-7-interface-symbol_318-33633.jpg"/>
            </a>

            <a href="https://www.github.com/shauncarland/" target="_blank">
              <img className="contact-icon" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
